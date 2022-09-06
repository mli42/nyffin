module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['only-warn', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // allows ESLint to understand TypeScript
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': [
      'warn',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'object-shorthand': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/order-in-components': 'off',
    'vue/attributes-order': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
