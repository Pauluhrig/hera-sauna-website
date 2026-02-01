// Shared menu data used by both /menu and /order pages

export interface MenuItem {
  name: string;
  nameThai?: string;
  price: string;
  desc?: string;
  options?: string;
  img?: string;
}

export interface TableMenuItem {
  name: string;
  nameThai?: string;
  prices: string[];
}

export interface MenuCategory {
  title: string;
  titleThai: string;
  items: MenuItem[];
}

export interface TableMenuCategory {
  title: string;
  titleThai: string;
  columns: string[];
  items: TableMenuItem[];
}

// Thai Main Dishes
export const thaiMain: MenuCategory = {
  title: "Thai Main Dishes",
  titleThai: "\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E08\u0E32\u0E19\u0E40\u0E14\u0E35\u0E22\u0E27",
  items: [
    { name: "Pad Krapao", nameThai: "\u0E02\u0E49\u0E32\u0E27\u0E1C\u0E31\u0E14\u0E01\u0E30\u0E40\u0E1E\u0E23\u0E32", price: "90", desc: "Fried meat with Thai Basil", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-1-X12.jpg" },
    { name: "Fried Rice", nameThai: "\u0E02\u0E49\u0E32\u0E27\u0E1C\u0E31\u0E14", price: "90", desc: "Thai-style fried rice", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-1-X14.jpg" },
    { name: "Garlic Fried Meat", nameThai: "\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E17\u0E2D\u0E14\u0E01\u0E23\u0E30\u0E40\u0E17\u0E35\u0E22\u0E21", price: "90", desc: "Fried meat with garlic", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-1-X16.jpg" },
    { name: "Sweet & Sour", nameThai: "\u0E1C\u0E31\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E49\u0E22\u0E27\u0E2B\u0E27\u0E32\u0E19\u0E23\u0E32\u0E14\u0E02\u0E49\u0E32\u0E27", price: "100", desc: "Fried sweet sour with rice", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-1-X18.jpg" },
    { name: "Stir-fried Vegetables", nameThai: "\u0E1C\u0E31\u0E14\u0E1C\u0E31\u0E01\u0E23\u0E32\u0E14\u0E02\u0E49\u0E32\u0E27", price: "100", desc: "Fried vegetables with rice", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-1-X20.jpg" },
    { name: "Thai Omelet", nameThai: "\u0E44\u0E02\u0E48\u0E40\u0E08\u0E35\u0E22\u0E27", price: "100", desc: "Thai omelet with rice", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-2-X12.jpg" },
  ]
};

export const soups: MenuCategory = {
  title: "Soups",
  titleThai: "\u0E0B\u0E38\u0E1B",
  items: [
    { name: "Tom Yum", nameThai: "\u0E15\u0E49\u0E21\u0E22\u0E33", price: "160", desc: "Hot and sour soup", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-2-X20.jpg" },
    { name: "Tom Kha Kai", nameThai: "\u0E15\u0E49\u0E21\u0E02\u0E48\u0E32\u0E44\u0E01\u0E48", price: "140", desc: "Coconut chicken soup", img: "/images/menu/dish-2-X18.jpg" },
    { name: "Clear Soup", nameThai: "\u0E15\u0E49\u0E21\u0E08\u0E37\u0E14", price: "130", desc: "Clear broth soup", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-2-X14.jpg" },
    { name: "Rice Soup", nameThai: "\u0E02\u0E49\u0E32\u0E27\u0E15\u0E49\u0E21", price: "80", desc: "Thai rice porridge", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-4-X12.jpg" },
  ]
};

export const curries: MenuCategory = {
  title: "Curries",
  titleThai: "\u0E41\u0E01\u0E07",
  items: [
    { name: "Green Curry", nameThai: "\u0E41\u0E01\u0E07\u0E40\u0E02\u0E35\u0E22\u0E27\u0E2B\u0E27\u0E32\u0E19", price: "150", desc: "Spicy green coconut curry", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-3-X12.jpg" },
    { name: "Massaman Curry", nameThai: "\u0E41\u0E01\u0E07\u0E21\u0E31\u0E2A\u0E21\u0E31\u0E48\u0E19\u0E44\u0E01\u0E48", price: "150", desc: "Mild curry with potatoes & chicken", img: "/images/menu/dish-3-X14.jpg" },
    { name: "Panaeng Curry", nameThai: "\u0E41\u0E01\u0E07\u0E1E\u0E30\u0E41\u0E19\u0E07", price: "150", desc: "Rich peanut curry", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-3-X16.jpg" },
  ]
};

export const noodles: MenuCategory = {
  title: "Noodles",
  titleThai: "\u0E01\u0E4B\u0E27\u0E22\u0E40\u0E15\u0E4B\u0E35\u0E22\u0E27",
  items: [
    { name: "Pad Thai", nameThai: "\u0E1C\u0E31\u0E14\u0E44\u0E17\u0E22", price: "100", desc: "Classic stir-fried rice noodles", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-4-X14.jpg" },
    { name: "Pad Se-ew", nameThai: "\u0E1C\u0E31\u0E14\u0E0B\u0E35\u0E2D\u0E34\u0E4A\u0E27", price: "100", desc: "Stir-fried flat noodles with soy", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-4-X16.jpg" },
    { name: "Thai Sukiyaki", nameThai: "\u0E2A\u0E38\u0E01\u0E35\u0E49\u0E41\u0E2B\u0E49\u0E07/\u0E19\u0E49\u0E33", price: "100", desc: "Dry or soup style", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-4-X18.jpg" },
    { name: "Fried Tom Yum Noodles", nameThai: "\u0E1C\u0E31\u0E14\u0E21\u0E32\u0E21\u0E48\u0E32\u0E15\u0E49\u0E21\u0E22\u0E33", price: "100", desc: "Tom Yum instant noodles", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-4-X20.jpg" },
    { name: "Fried Instant Noodles", nameThai: "\u0E21\u0E32\u0E21\u0E48\u0E32\u0E1C\u0E31\u0E14", price: "90", desc: "Stir-fried instant noodles", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-5-X12.jpg" },
    { name: "Basil Instant Noodles", nameThai: "\u0E21\u0E32\u0E21\u0E48\u0E32\u0E1C\u0E31\u0E14\u0E01\u0E30\u0E40\u0E1E\u0E23\u0E32", price: "130", desc: "Instant noodles with Thai basil", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-5-X14.jpg" },
    { name: "Red Curry Noodles", nameThai: "\u0E1C\u0E31\u0E14\u0E1E\u0E23\u0E34\u0E01\u0E41\u0E01\u0E07", price: "100", desc: "Fried with red curry paste", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-5-X16.jpg" },
    { name: "Spaghetti Kee Mao", nameThai: "\u0E2A\u0E1B\u0E32\u0E40\u0E01\u0E15\u0E15\u0E35\u0E49\u0E1C\u0E31\u0E14\u0E02\u0E35\u0E49\u0E40\u0E21\u0E32", price: "100", desc: "Spicy drunken spaghetti", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-5-X18.jpg" },
    { name: "Curry Powder Stir-fry", nameThai: "\u0E1C\u0E31\u0E14\u0E1C\u0E07\u0E01\u0E30\u0E2B\u0E23\u0E35\u0E48", price: "140", desc: "Fried with curry powder", options: "Pork / Chicken / Shrimp +30 / Squid +30", img: "/images/menu/dish-5-X20.jpg" },
  ]
};

export const salads: MenuCategory = {
  title: "Thai Salads",
  titleThai: "\u0E22\u0E33",
  items: [
    { name: "Glass Noodle Salad", nameThai: "\u0E22\u0E33\u0E27\u0E38\u0E49\u0E19\u0E40\u0E2A\u0E49\u0E19", price: "120", desc: "Spicy glass noodle salad", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-6-X12.jpg" },
    { name: "Papaya Salad", nameThai: "\u0E2A\u0E49\u0E21\u0E15\u0E33\u0E44\u0E17\u0E22/\u0E1B\u0E25\u0E32\u0E23\u0E49\u0E32", price: "120", desc: "Som Tam with dried shrimp & peanuts", img: "/images/menu/dish-6-X14.jpg" },
    { name: "Thai Sausage Salad", nameThai: "\u0E22\u0E33\u0E2B\u0E21\u0E39\u0E22\u0E2D", price: "120", desc: "Spicy Thai sausage salad", img: "/images/menu/dish-6-X16.jpg" },
    { name: "Larb", nameThai: "\u0E25\u0E32\u0E1A", price: "120", desc: "Spicy minced meat salad", options: "Pork / Chicken", img: "/images/menu/dish-6-X18.jpg" },
    { name: "Instant Noodle Salad", nameThai: "\u0E22\u0E33\u0E21\u0E32\u0E21\u0E48\u0E32", price: "120", desc: "Spicy instant noodle salad", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-6-X20.jpg" },
  ]
};

export const snacks: MenuCategory = {
  title: "Snacks & Appetizers",
  titleThai: "\u0E02\u0E2D\u0E07\u0E17\u0E32\u0E19\u0E40\u0E25\u0E48\u0E19",
  items: [
    { name: "Gyoza", nameThai: "\u0E40\u0E01\u0E35\u0E4A\u0E22\u0E27\u0E0B\u0E48\u0E32", price: "90", desc: "8 pcs pork & chicken dumplings with sauce", img: "/images/menu/dish-7-X12.jpg" },
    { name: "Chicken Nuggets", nameThai: "\u0E19\u0E31\u0E01\u0E40\u0E01\u0E47\u0E15", price: "100", desc: "9 pieces with sweet sauce", img: "/images/menu/dish-7-X14.jpg" },
    { name: "Fried Chicken Wings", nameThai: "\u0E1B\u0E35\u0E01\u0E44\u0E01\u0E48\u0E17\u0E2D\u0E14", price: "100", desc: "6 crispy wings", img: "/images/menu/dish-7-X16.jpg" },
    { name: "French Fries", nameThai: "\u0E40\u0E1F\u0E23\u0E19\u0E1F\u0E23\u0E32\u0E22", price: "90", desc: "Crispy golden fries", img: "/images/menu/dish-7-X18.jpg" },
    { name: "Cheese Balls", nameThai: "\u0E0A\u0E35\u0E2A\u0E1A\u0E2D\u0E25", price: "90", desc: "7 pieces of cheese balls", img: "/images/menu/dish-7-X20.jpg" },
    { name: "Fried Shrimp", nameThai: "\u0E01\u0E38\u0E49\u0E07\u0E0A\u0E38\u0E1A\u0E41\u0E1B\u0E49\u0E07\u0E17\u0E2D\u0E14", price: "160", desc: "Battered fried shrimp", img: "/images/menu/dish-2-X16.jpg" },
  ]
};

export const western: MenuCategory = {
  title: "Western Dishes",
  titleThai: "\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E1D\u0E23\u0E31\u0E48\u0E07",
  items: [
    { name: "German Curry Sausage", nameThai: "\u0E44\u0E2A\u0E49\u0E01\u0E23\u0E2D\u0E01\u0E40\u0E22\u0E2D\u0E23\u0E21\u0E31\u0E19 + \u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E23\u0E35\u0E0B\u0E2D\u0E2A", price: "190", desc: "With fries", img: "/images/menu/dish-8-X12.jpg" },
    { name: "Hera Wrap", nameThai: "\u0E40\u0E2E\u0E23\u0E32 \u0E41\u0E23\u0E1B", price: "160", desc: "With fries", img: "/images/menu/dish-8-X14.jpg" },
    { name: "Club Sandwich", nameThai: "\u0E04\u0E25\u0E31\u0E1A\u0E41\u0E0B\u0E19\u0E27\u0E34\u0E0A", price: "180", desc: "Triple-decker with fries", img: "/images/menu/dish-8-X16.jpg" },
    { name: "Fish & Chips", nameThai: "\u0E1F\u0E34\u0E0A\u0E41\u0E2D\u0E19\u0E14\u0E4C\u0E0A\u0E34\u0E1E", price: "140", desc: "Beer-battered fish with fries", img: "/images/menu/dish-8-X18.jpg" },
    { name: "Grilled Chicken Breast", nameThai: "\u0E2D\u0E01\u0E44\u0E01\u0E48\u0E01\u0E23\u0E34\u0E25 + \u0E44\u0E02\u0E48\u0E14\u0E32\u0E27", price: "130", desc: "With 2 fried eggs and fries", img: "/images/menu/dish-7-X22.jpg" },
  ]
};

export const spaghettiMenu: MenuCategory = {
  title: "Spaghetti",
  titleThai: "\u0E2A\u0E1B\u0E32\u0E40\u0E01\u0E15\u0E15\u0E35\u0E49",
  items: [
    { name: "Spaghetti Bolognese", nameThai: "\u0E2A\u0E1B\u0E32\u0E40\u0E01\u0E15\u0E15\u0E35\u0E49\u0E42\u0E1A\u0E25\u0E2D\u0E07\u0E40\u0E19\u0E2A", price: "130", desc: "Classic meat sauce", img: "/images/menu/dish-9-X12.jpg" },
    { name: "Spaghetti with Bacon", nameThai: "\u0E2A\u0E1B\u0E32\u0E40\u0E01\u0E15\u0E15\u0E35\u0E49\u0E40\u0E1A\u0E04\u0E2D\u0E19", price: "140", desc: "Pork or chicken", img: "/images/menu/dish-9-X14.jpg" },
    { name: "Garlic Prawns Spaghetti", nameThai: "\u0E2A\u0E1B\u0E32\u0E40\u0E01\u0E15\u0E15\u0E35\u0E49\u0E01\u0E38\u0E49\u0E07\u0E01\u0E23\u0E30\u0E40\u0E17\u0E35\u0E22\u0E21", price: "180", desc: "With garlic prawns", img: "/images/menu/dish-9-X16.jpg" },
    { name: "Pesto Spaghetti", nameThai: "\u0E2A\u0E1B\u0E32\u0E40\u0E01\u0E15\u0E15\u0E35\u0E49\u0E40\u0E1E\u0E2A\u0E42\u0E15\u0E49", price: "140", desc: "With basil pesto", options: "Pork / Chicken / Shrimp +20 / Squid +20", img: "/images/menu/dish-9-X18.jpg" },
  ]
};

export const saladsWestern: MenuCategory = {
  title: "Salads",
  titleThai: "\u0E2A\u0E25\u0E31\u0E14",
  items: [
    { name: "Caesar Salad", nameThai: "\u0E0B\u0E35\u0E0B\u0E32\u0E23\u0E4C\u0E2A\u0E25\u0E31\u0E14", price: "180", desc: "With grilled chicken breast", img: "/images/menu/dish-10-X12.jpg" },
    { name: "Hera Salad", nameThai: "\u0E40\u0E2E\u0E23\u0E32\u0E2A\u0E25\u0E31\u0E14", price: "180", desc: "With special Hera dressing", img: "/images/menu/dish-10-X14.jpg" },
    { name: "Fruit Salad", nameThai: "\u0E2A\u0E25\u0E31\u0E14\u0E1C\u0E25\u0E44\u0E21\u0E49", price: "180", desc: "Fresh seasonal fruits", img: "/images/menu/dish-10-X16.jpg" },
    { name: "Plate of Fruits", nameThai: "\u0E1C\u0E25\u0E44\u0E21\u0E49", price: "130", desc: "Watermelon, Pineapple, Mango, Banana", img: "/images/menu/dish-10-X18.jpg" },
  ]
};

export const smoothies: MenuCategory = {
  title: "Smoothies & Shakes",
  titleThai: "\u0E2A\u0E21\u0E39\u0E17\u0E15\u0E35\u0E49",
  items: [
    { name: "Apple Shake", price: "80" },
    { name: "Banana Shake", price: "80" },
    { name: "Mango Shake", price: "80" },
    { name: "Watermelon Shake", price: "80" },
    { name: "Pineapple Shake", price: "80" },
    { name: "Lemon Shake", price: "80" },
    { name: "Orange Shake", price: "80" },
    { name: "Coconut Shake", price: "100" },
  ]
};

export const coffeeAndTea: TableMenuCategory = {
  title: "Coffee & Tea",
  titleThai: "\u0E01\u0E32\u0E41\u0E1F & \u0E0A\u0E32",
  columns: ["HOT", "ICED", "BLENDED"],
  items: [
    { name: "Espresso", prices: ["60", "-", "-"] },
    { name: "Cappuccino", prices: ["70", "80", "90"] },
    { name: "Americano", prices: ["70", "80", "90"] },
    { name: "Latte", prices: ["70", "80", "90"] },
    { name: "Mocha", prices: ["70", "80", "90"] },
    { name: "Orange Americano", prices: ["-", "120", "-"] },
  ]
};

export const teaMilk: TableMenuCategory = {
  title: "Tea & Milk",
  titleThai: "\u0E0A\u0E32 & \u0E19\u0E21",
  columns: ["HOT", "ICED", "BLENDED"],
  items: [
    { name: "Thai Tea", nameThai: "\u0E0A\u0E32\u0E44\u0E17\u0E22", prices: ["70", "80", "90"] },
    { name: "Green Tea", nameThai: "\u0E0A\u0E32\u0E40\u0E02\u0E35\u0E22\u0E27", prices: ["70", "80", "90"] },
    { name: "Lemon Tea", nameThai: "\u0E0A\u0E32\u0E21\u0E30\u0E19\u0E32\u0E27", prices: ["70", "80", "90"] },
    { name: "Chocolate", nameThai: "\u0E0A\u0E47\u0E2D\u0E04\u0E42\u0E01\u0E41\u0E25\u0E15", prices: ["70", "80", "90"] },
    { name: "Ovaltine", nameThai: "\u0E19\u0E21\u0E42\u0E2D\u0E27\u0E31\u0E25\u0E15\u0E34\u0E19", prices: ["70", "80", "90"] },
    { name: "Fresh Milk", nameThai: "\u0E19\u0E21\u0E2A\u0E14", prices: ["70", "80", "90"] },
    { name: "Pink Milk", nameThai: "\u0E19\u0E21\u0E0A\u0E21\u0E1E\u0E39", prices: ["70", "80", "90"] },
  ]
};

export const iceCream: MenuCategory = {
  title: "Ice Cream & Milkshakes",
  titleThai: "\u0E44\u0E2D\u0E28\u0E01\u0E23\u0E35\u0E21",
  items: [
    { name: "1 Scoop", price: "55", desc: "Chocolate, Vanilla, or Strawberry" },
    { name: "2 Scoops", price: "100", desc: "Chocolate, Vanilla, or Strawberry" },
    { name: "Strawberry Sundae", price: "135" },
    { name: "Chocolate Sundae", price: "135" },
    { name: "Banana Split", price: "155" },
    { name: "Vanilla Milkshake", price: "140" },
    { name: "Chocolate Milkshake", price: "140" },
    { name: "Strawberry Milkshake", price: "140" },
    { name: "Caramel Milkshake", price: "140" },
  ]
};

export const otherDrinks: MenuCategory = {
  title: "Other Drinks",
  titleThai: "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E14\u0E37\u0E48\u0E21\u0E2D\u0E37\u0E48\u0E19\u0E46",
  items: [
    { name: "Fresh Coconut", nameThai: "\u0E21\u0E30\u0E1E\u0E23\u0E49\u0E32\u0E27", price: "79" },
    { name: "Water", price: "20" },
    { name: "Soft Drinks", price: "40", desc: "Coke, Sprite, Fanta" },
  ]
};

export const foodCategories: MenuCategory[] = [thaiMain, soups, curries, noodles, salads, snacks, western, spaghettiMenu, saladsWestern];
export const drinkCategories: MenuCategory[] = [smoothies, iceCream, otherDrinks];
export const tableDrinkCategories: TableMenuCategory[] = [coffeeAndTea, teaMilk];

// Flat list of all orderable items for the order page
export interface OrderableItem {
  id: string;
  name: string;
  nameThai?: string;
  price: number;
  category: string;
  desc?: string;
  options?: string;
}

export function getAllOrderableItems(): OrderableItem[] {
  const items: OrderableItem[] = [];
  let idx = 0;

  for (const cat of foodCategories) {
    for (const item of cat.items) {
      items.push({
        id: `item-${idx++}`,
        name: item.name,
        nameThai: item.nameThai,
        price: parseInt(item.price),
        category: cat.title,
        desc: item.desc,
        options: item.options,
      });
    }
  }

  for (const cat of drinkCategories) {
    for (const item of cat.items) {
      items.push({
        id: `item-${idx++}`,
        name: item.name,
        nameThai: item.nameThai,
        price: parseInt(item.price),
        category: cat.title,
        desc: item.desc,
      });
    }
  }

  // Coffee & Tea and Tea & Milk have multiple price columns
  for (const cat of tableDrinkCategories) {
    for (const item of cat.items) {
      for (let c = 0; c < cat.columns.length; c++) {
        const price = item.prices[c];
        if (price !== '-') {
          const variant = cat.columns[c].toLowerCase();
          items.push({
            id: `item-${idx++}`,
            name: `${item.name} (${variant})`,
            nameThai: item.nameThai,
            price: parseInt(price),
            category: cat.title,
          });
        }
      }
    }
  }

  return items;
}
