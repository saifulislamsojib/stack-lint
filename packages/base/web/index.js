import globals from 'globals';
import webRules from '../rules/web.js';

export const webConfigs = Object.freeze({
  languageOptions: {
    globals: { ...globals.es2023, ...globals.browser },
  },
  rules: webRules,
});
