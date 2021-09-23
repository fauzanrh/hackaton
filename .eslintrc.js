const path = require('path')

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:import/errors',
    // 'plugin:import/warnings',
  ],
  plugins: ['unused-imports'],
  parserOptions: {
    project: 'jsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': [
      {
        node: {
          paths: [path.resolve(__dirname, 'src')],
        },
      },
    ],
  },
};
