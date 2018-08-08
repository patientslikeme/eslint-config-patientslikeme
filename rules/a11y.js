// only add a11y rules

module.exports = {
  // airbnb config requires both id & nested, but this just enforces that there's an id
  'jsx-a11y/label-has-for': [ 'error', {
    'components': [ 'label' ],
    'required': {
      'every': [ 'id' ]
    },
    'allowChildren': false,
  }],
};
