// only add react rules

module.exports = {
  // it's acceptable to mix these even at the expense of consistency
  'react/destructuring-assignment': 'off',
  // it's useful to be able to reuse prop types off of components
  // since we don't remove prop types in production it's safe to disable this rule
  'react/forbid-foreign-prop-types': 'off',
  // in theory it would be good to enforce but in practice we sometimes need to be vague
  'react/forbid-prop-types': 'off',
  // force consistency of jsx attribute declaration
  'react/jsx-boolean-value': ['error', 'always'],
  // this rule is overreaching in it's prescriptiveness
  'react/jsx-one-expression-per-line': 'off',
  // it's good to avoid but there are occasions where you need it and will just end up disabling this rule inline anyways
  'react/no-danger': 'off',
  // when the day arrives that stateless functions provide some performance gain we can enable this
  'react/prefer-stateless-function': 'off',
  // disabled because you end up writing a lot of { className: '' } default props
  'react/require-default-props': 'off',
  // alpha-sort prop types for lack of a better idea
  'react/sort-prop-types': ['error', {
    'sortShapeProp': true,
    'ignoreCase': true,
  }],
  // alpha-sort default props for consistency
  'react/jsx-sort-default-props': ['error']
};
