module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: 'standard',
  env: {
    browser: true
  },
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 0,
    'prefer-const': 0
  }
}
