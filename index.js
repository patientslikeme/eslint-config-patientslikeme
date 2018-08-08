const commonRules = require('./rules/common');
const reactRules = require('./rules/react');
const a11yRules = require('./rules/a11y');

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    ...commonRules,
    ...reactRules,
    ...a11yRules,
  },
}
