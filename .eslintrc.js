module.exports = {
  env: {
    es6: false,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  },
  rules: {
    camelcase: ['off'],
    semi: ['error', 'always'],
    'no-throw-literal': 'off'
  }
};
