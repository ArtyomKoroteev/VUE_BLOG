module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-trailing-spaces": "off",
    "eol-last": "off",
    "linebreak-style": "off",
    "no-underscore-dangle": "off",
    "func-names": "off",
    "consistent-return": "off",
    "import/prefer-default-export": "off",
  },
};
