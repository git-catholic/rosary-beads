import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TypescriptTranslateLoader } from "../loaders/typescript-translate-loader";

export function TranslationLoaderFactory() {
  return new TypescriptTranslateLoader();
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      fallbackLang: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslationLoaderFactory)
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})
export class RosaryTranslateModule { }