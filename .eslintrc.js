module.exports = {
  root: true,
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
  },
  globals: {},
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    complexity: 'off',
    'max-params': ['error', 4],
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
  },
}
