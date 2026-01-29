import { configs } from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import { rules as _rules } from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactNativePlugin from 'eslint-plugin-react-native'

export default [
   configs.recommended,

   {
      files: ['**/*.js', '**/*.jsx'],
      languageOptions: {
         ecmaVersion: 2022,
         sourceType: 'module',
         parserOptions: { ecmaFeatures: { jsx: true } },
      },
      plugins: {
         prettier: prettierPlugin,
         react: reactPlugin,
         'react-hooks': reactHooksPlugin,
         'react-native': reactNativePlugin,
      },
      settings: { react: { version: 'detect' } },
      rules: {
         ..._rules,
         'prettier/prettier': 'error',

         'react/react-in-jsx-scope': 'off',
         'react/prop-types': 'off',

         'react-hooks/rules-of-hooks': 'error',
         'react-hooks/exhaustive-deps': 'warn',

         'react-native/no-unused-styles': 'warn',
         'react-native/split-platform-components': 'warn',
         'react-native/no-inline-styles': 'warn',
         'react-native/no-color-literals': 'warn',
         'react-native/no-raw-text': 'off',
      },
   },

   {
      ignores: ['node_modules/**', '.expo/**', 'android/**', 'ios/**', 'dist/**'],
   },
]
