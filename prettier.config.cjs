/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  pluginSearchDirs: false,
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['cn'],
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
}
