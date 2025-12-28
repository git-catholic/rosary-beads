import { TranslateLoader, TranslationObject } from "@ngx-translate/core";
import { Observable, of } from "rxjs";
import { messages_es_xlf } from "../translations/messages.es";
import { messages_en_xlf } from "../translations/messages.en";

export class TypescriptTranslateLoader implements TranslateLoader {

  getTranslation(lang: string): Observable<TranslationObject> {
    if ('es' === lang) {
      return of(messages_es_xlf);
    }
    return of(messages_en_xlf);
  }
  
}