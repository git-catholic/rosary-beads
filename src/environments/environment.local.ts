// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { LANG_SUPPORTED_EN, LANG_SUPPORTED_ES } from "./env-vars";

export const environment = {
  production: false,
  debugMode: true,
  redirect: false,
  supportedLanguages: [
    [ 'en', LANG_SUPPORTED_EN ],
    // [ 'he', 'supported.hebrew', true ],
    [ 'es', LANG_SUPPORTED_ES ]
  ],
  useDebugImage: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
