module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ 'plugin:@typescript-eslint/recommended' ],
  rules: {
    '@typescript-eslint/no-unused-vars': [ 0 ],
    '@typescript-eslint/ban-ts-comment': [ 0 ],
  },
};

