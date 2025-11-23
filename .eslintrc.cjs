module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@stylistic/js'],
  rules: {
    '@stylistic/js/semi': ['error', 'always'],
    '@stylistic/js/quotes': ['error', 'single'],
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/eol-last': ['error', 'always'],
    '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
    '@stylistic/js/space-before-blocks': ['error', 'always'],
    '@stylistic/js/keyword-spacing': ['error', { before: true, after: true }],
    '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    '@stylistic/js/block-spacing': ['error', 'always'],
    '@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/no-multi-spaces': 'error',
  },
}
