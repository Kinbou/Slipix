module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': [2, 'always-multiline'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-access-state-in-setstate': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx'],
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@containers', './src/containers'],
          ['@pages', './src/pages'],
        ],
      },
    },
  },
}
