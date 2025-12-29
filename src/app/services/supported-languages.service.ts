import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../environments/environment';
import { take } from 'rxjs';
import { StateStorageService } from './state-storage.service';
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

  private languageSelectorList: LanguageItem[];

  private supportedLang_english?: string;
  // private supportedLang_hebrew?: string;
  private supportedLang_spanish?: string;

  constructor(private stateStorageService: StateStorageService,
              private translate: TranslateService) {

    this.supportedLanguagesMap = new Map<string, SupportedLanguage>();

    environment.supportedLanguages.forEach(entry => {
      const supportedLanguage = this.convertEntry(entry);
      this.supportedLanguagesMap.set(supportedLanguage?.id, supportedLanguage);
    });

    this.supportedLanguageCodes = Array.from(this.supportedLanguagesMap.keys());

    this.translateToLanguageCodeMap = new Map<string, string>();
    this.supportedLanguagesMap.forEach((value, key) => {
      this.translateToLanguageCodeMap.set(value.id, key);
    });

    this.supportedLanguageTranslateIds = Array.from(this.translateToLanguageCodeMap.values());

    this.translate.addLangs(this.supportedLanguageCodes);

    this.updateSupportedLanguages();
    this.assignActiveLanguageIdFromCode(this.stateStorageService?.selectedLanguage?.data);
  }

  get langDir(): string {
    return this.langRtl ? 'rtl' : 'ltr';
  }

  getLanguageSelectorList(): LanguageItem[] {
    if (this.languageSelectorList === undefined) {
      this.languageSelectorList = [];
      this.getSupportedLanguagesMap().forEach((value, key) => {
        console.log(`selector list: ${key}, ${JSON.stringify(value)}`);
        this.languageSelectorList.push({ value: key, displayValue: value?.id })
      });
    }
    console.log(`full selector list: ${JSON.stringify(this.languageSelectorList)}`);
    return this.languageSelectorList;
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

  getAssignedActiveLanguageId(): string {
    return this.stateStorageService?.selectedLanguage?.data || 'en';
  }

  private assignActiveLanguageIdFromCodeWorker(code: string): void {
    const supportedLanguage = this.supportedLanguagesMap.get(code);
    this.langRtl = supportedLanguage?.rtl;
    console.log(`before use ${code}`);
    this.translate.use(code);
    console.log(`after use ${code}`);
    this.updateSupportedLanguages();
    if (this.stateStorageService?.selectedLanguage) {
      this.stateStorageService.selectedLanguage.data = code;
    }
  }

  private updateSupportedLanguages() {
    this.translate.get('supported.english').pipe(take(1))
      .subscribe(value => {
        this.supportedLang_english = value;
      });

    // this.translate.get('supported.hebrew').pipe(take(1))
    //     this.supportedLang_hebrew = value;
    //   });

    this.translate.get('supported.spanish').pipe(take(1))
      .subscribe(value => {
        this.supportedLang_spanish = value;
      });
  }

  private convertEntry(entry: any[]): SupportedLanguage {
    const supportedLanguage: SupportedLanguage = {
      key: entry[0] as string,
      id: entry[1] as string,
      rtl: entry[2] as boolean,
      reference: entry[3] as string
    };
    return supportedLanguage;
  }

}

export interface SupportedLanguage {
  key: string;
  id: string;
  rtl?: boolean;
  reference?: string;
}
