module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'no-console': 1,
    'no-undef': 1,
    'no-unused-vars': 1,
    'react-native/no-inline-styles': 0,
    'comma-dangle': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off'
  },
  overrides: [
    {
      // Test files only
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ]
};
