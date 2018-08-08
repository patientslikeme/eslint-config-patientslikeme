const testRules = require('./rules/test');

module.exports = {
  extends: [
    'plugin:jest/recommended',
  ],
  rules: {
    ...testRules,
  },
}
