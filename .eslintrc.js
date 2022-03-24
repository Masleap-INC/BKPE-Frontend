module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      'ignores': ['default']
    }],
    'no-console': 'off',
    "no-new": 0,
    "object-shorthand": 0,
  },
}
