export const LANG_SUPPORTED_EN = 'supported.english';
export const LANG_SUPPORTED_ES = 'supported.spanish';
export const LANG_SUPPORTED_LA = 'supported.latin';

/*
  Column 1: language code
  Column 2: translation key
  Column 3: text right-to-left (true)
  Column 4: reference

  // NOTE: Luminous mysteries for Latin derived from https://boston-catholic-journal.com/listen-to-the-holy-rosary-in-latin-the-luminous-mysteries.htm
*/
export const supportedLanguagesShared = [
    [ 'en', LANG_SUPPORTED_EN, false, 'https://austindiocese.org/documents/2017/8/The%20Rosary_for%20web.pdf' ],
    [ 'es', LANG_SUPPORTED_ES, false, 'https://austindiocese.org/documents/2017/8/Spanish%20Rosary_for%20web.pdf' ],
    [ 'la', LANG_SUPPORTED_LA, false, 'http://stmarys-parish.org/Latin/The%20Rosary.pdf' ]
  ]