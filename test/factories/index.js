module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  installedESLint: true,
  plugins: [
    'react',
  ],
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};
