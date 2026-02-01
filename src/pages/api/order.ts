import type { APIRoute } from 'astro';

export const prerender = false;

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderRequest {
  table: number;
  items: OrderItem[];
  total: number;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: OrderRequest = await request.json();

    // Validate table
    if (!body.table || body.table < 1 || body.table > 15 || !Number.isInteger(body.table)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid table number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate items
    if (!Array.isArray(body.items) || body.items.length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'No items in order' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    for (const item of body.items) {
      if (!item.name || typeof item.name !== 'string') {
        return new Response(JSON.stringify({ success: false, error: 'Invalid item name' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      if (!item.quantity || item.quantity < 1 || !Number.isInteger(item.quantity)) {
        return new Response(JSON.stringify({ success: false, error: 'Invalid item quantity' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      if (!item.price || item.price < 0) {
        return new Response(JSON.stringify({ success: false, error: 'Invalid item price' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Recalculate total server-side (don't trust client total)
    const calculatedTotal = body.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    const orderId = `ORD-${Date.now()}`;

    // Build LINE Notify message
    const itemLines = body.items.map(
      (item) => `${item.quantity}x ${item.name} (${item.price}\u0E3F)`
    );

    const message = [
      '',
      `\uD83D\uDD14 New Order - Table ${body.table}`,
      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
      ...itemLines,
      '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
      `Total: ${calculatedTotal}\u0E3F`,
      `Order: ${orderId}`,
    ].join('\n');

    const lineToken = import.meta.env.LINE_NOTIFY_TOKEN;

    if (lineToken) {
      try {
        const lineRes = await fetch('https://notify-api.line.me/api/notify', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lineToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ message }),
        });

        if (!lineRes.ok) {
          console.error('LINE Notify failed:', lineRes.status, await lineRes.text());
        }
      } catch (lineErr) {
        console.error('LINE Notify error:', lineErr);
      }
    } else {
      console.log('LINE_NOTIFY_TOKEN not set. Order details:');
      console.log(message);
    }

    return new Response(JSON.stringify({ success: true, orderId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Order API error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
