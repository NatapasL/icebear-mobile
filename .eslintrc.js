module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/prefer-default-export': 'off',
    'semi': ['error', 'never'],
    'react/jsx-props-no-spreading': ['error', { 'custom': 'ignore' }]
  },
  'globals': {
    "fetch": false
  }
}
