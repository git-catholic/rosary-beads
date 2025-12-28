import { LANG_SUPPORTED_EN, LANG_SUPPORTED_ES } from "./env-vars";

export const environment = {
  production: true,
  debugMode: false,
  redirect: true,
  supportedLanguages: [
    [ 'en', LANG_SUPPORTED_EN ],
    // [ 'he', 'supported.hebrew', true ],
    [ 'es', LANG_SUPPORTED_ES ]
  ],
  useDebugImage: false
};
