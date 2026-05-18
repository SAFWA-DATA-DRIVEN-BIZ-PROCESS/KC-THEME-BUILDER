import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
export default defineConfig([globalIgnores([
  'dist',
  'dist_keycloak',
  'public/keycloak-theme',
  'public/keycloakify-dev-resources',
  'src/**/*.stories.tsx'
]), {
  files: ['**/*.{ts,tsx}'],
  extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite],
  languageOptions: {
    globals: globals.browser
  }
}], {
  linterOptions: {
    reportUnusedDisableDirectives: "off"
  }
});