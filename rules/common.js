// these rules are included in all config types

module.exports = {
  // force func args to always be in parens
  'arrow-parens': ['error', 'always'],
  // this rule is not helpful
  'class-methods-use-this': 'off',
  // this avoids forcing trailing commas in function args
  'comma-dangle': ['error', {
    'arrays': 'always-multiline',
    'objects': 'always-multiline',
    'imports': 'always-multiline',
    'exports': 'always-multiline',
    'functions': 'ignore',
  }],
  // this prevents `if` clauses from being on-liners without curly braces
  'curly': ['error', 'all'],
  // 150 is an arbitrary but reasonable limit
  'max-len': ['error', 150, 4],
  // this will allow unary operators in for loops only
  'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  // this allows us to use `for...of` which is occasionally useful
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
    {
      selector: 'MethodDefinition[kind='set']',
      message: 'Property setters are not allowed',
    },
    {
      selector: 'MethodDefinition[kind='get']',
      message: 'Property getters are not allowed',
    },
  ],
  // we can consider a more nuanced approach to this rule since
  // it's very configurable but disabled for now
  'object-curly-newline': 'off',
};
