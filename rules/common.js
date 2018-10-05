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
  'no-restricted-syntax': 'off',
  // we can consider a more nuanced approach to this rule since
  // it's very configurable but disabled for now
  'object-curly-newline': 'off',
};
