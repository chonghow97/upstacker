module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  parserOptions: {
    ecmaFeatures: {
      arrowFunctions: true,
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'import/no-named-as-default': 'off',
    camelcase: 'off',
    'default-param-last': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'import/export': 'off',
    'no-nested-ternary': 'off',
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': 'off',
    'no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      // TypeScript sources (src/ was converted from JS). Optional props are typed with `?` instead of defaultProps,
      // and the base no-unused-vars rule misreads parameter names inside function types.
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/require-default-props': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {varsIgnorePattern: '^_', argsIgnorePattern: '^_'},
        ],
      },
    },
  ],
};
