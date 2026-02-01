// Table tokens for QR-code order authentication
// Rotate these periodically by generating new random hex strings
// Generate with: node -e "require('crypto').randomBytes(8).toString('hex')"

export const tables: Record<number, { token: string }> = {
  1: { token: '800ae841d44fb17d' },
  2: { token: '63e52e73872c73e4' },
  3: { token: 'bbabad181524634d' },
  4: { token: 'fb9dc109cdaff3ef' },
  5: { token: '97f17d34dcb60d10' },
  6: { token: '7c2d5b1e20c186b7' },
  7: { token: 'e7aa892cbd0534a7' },
  8: { token: 'c2772cbc5586b3b6' },
  9: { token: 'd9d72fe4e2a4db1c' },
  10: { token: '5fccaf8e7540ec93' },
  11: { token: 'ff3b04ed639ee368' },
  12: { token: '7fcf82f046f69d63' },
  13: { token: 'a38fa116daac1abb' },
  14: { token: '7091f50eaa6fb1cd' },
  15: { token: '67de3fe6d19ef989' },
};
