const commonRules = require('./rules/common');

module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  rules: {
    ...baseRules,
  },
}
