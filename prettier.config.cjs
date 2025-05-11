/** @type {import("prettier").Config} */

module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  endOfLine: 'lf',
  importOrder: [
    '^react(-dom)?$',
    '^next[.*]$',
    '^node:(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@\/(.*)$',
    // '^[.](?!.*.css$)',
    '.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
    '@prettier/plugin-xml',
  ],
  xmlQuoteAttributes: 'double',
  xmlWhitespaceSensitivity: 'ignore',
};
