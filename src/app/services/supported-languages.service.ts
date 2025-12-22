import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../environments/environment';
import { take } from 'rxjs';
import { StringStorage } from './state-storage.service';
import { LanguageItem } from '../components/config/language-selector/language-selector.component';

@Injectable({
  providedIn: 'root'
})
export class SupportedLanguagesService {

  private readonly supportedLanguagesMap: Map<string, SupportedLanguage>;

  private readonly translateToLanguageCodeMap: Map<string, string>;

  private readonly supportedLanguageCodes: string[];

  private readonly supportedLanguageTranslateIds: string[];

  private langRtl?: boolean;

  private supportedLang_english?: string;
  // private supportedLang_hebrew?: string;
  private supportedLang_spanish?: string;

  constructor(private translate: TranslateService) {

    this.supportedLanguagesMap = new Map<string, SupportedLanguage>();

    environment.supportedLanguages.forEach(entry => {
      const key = entry[0] as string;
      const supportedLanguage: SupportedLanguage = {
        id: entry[1] as string,
        rtl: (entry?.length >= 3)
      };
      console.log(`loading ${key}`);
      this.supportedLanguagesMap.set(key, supportedLanguage);
    });

    this.supportedLanguageCodes = Array.from(this.supportedLanguagesMap.keys());

    this.translateToLanguageCodeMap = new Map<string, string>();
    this.supportedLanguagesMap.forEach((value, key) => {
      this.translateToLanguageCodeMap.set(value.id, key);
    });

    this.supportedLanguageTranslateIds = Array.from(this.translateToLanguageCodeMap.values());

    this.translate.addLangs(this.supportedLanguageCodes);

    this.updateSupportedLanguages();
  }

  get langDir(): string {
    return this.langRtl ? 'rtl' : 'ltr';
  }

  getLanguageSelectorList(): LanguageItem[] {
    const languageSelectorList: LanguageItem[] = [];
    this.getSupportedLanguagesMap().forEach((value, key) => {
      languageSelectorList.push({ value: key, displayValue: value?.id })
    });
    return languageSelectorList;
  }

  getSupportedLanguagesMap(): Map<string, SupportedLanguage> {
    return this.supportedLanguagesMap;
  }

  getAvailableLanguageCodes(): readonly string[] {
    return this.translate.getLangs();
  }

  getAvailableLanguageTranslateIds(): string[] {
    return this.supportedLanguageTranslateIds;
  }

  onLanguageSelectionChange(event:Event): void {
    const translateId = (event.target as HTMLSelectElement).value;
    const code = this.translateToLanguageCodeMap.get(translateId) || this.translate.defaultLang;
    this.assignActiveLanguageIdFromCodeWorker(code);
  }

  assignActiveLanguageIdFromCode(code: string): void {
    this.assignActiveLanguageIdFromCodeWorker(code);
  }

  get supportedLanguage_english(): string {
    return this.supportedLang_english || '';
  }

  // get supportedLanguage_hebrew(): string {
  //   return this.supportedLang_hebrew || '';
  // }

  get supportedLanguage_spanish(): string {
    return this.supportedLang_spanish || '';
  }

  private assignActiveLanguageIdFromCodeWorker(code: string): void {
    const supportedLanguage = this.supportedLanguagesMap.get(code);
    this.langRtl = supportedLanguage?.rtl;
    console.log(`before use ${code}`);
    this.translate.use(code);
    console.log(`after use ${code}`);
    this.updateSupportedLanguages();
  }

  private updateSupportedLanguages() {
    this.translate.get('supported.english').pipe(take(1))
      .subscribe(value => {
        console.log(`received english event`);
        this.supportedLang_english = value;
      });

    // this.translate.get('supported.hebrew').pipe(take(1))
    //   .subscribe(value => {
    //     this.supportedLang_hebrew = value;
    //   });

    this.translate.get('supported.spanish').pipe(take(1))
      .subscribe(value => {
        console.log(`received spanish event`);
        this.supportedLang_spanish = value;
      });
   }

}

export interface SupportedLanguage {
  id: string;
  rtl?: boolean;
  // reference?: string;
}
