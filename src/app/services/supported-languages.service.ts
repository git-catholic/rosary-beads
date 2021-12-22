import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfigService } from './app-config.service';
import { StringStorage } from './state-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SupportedLanguagesService {

  readonly supportedLanguages = new Map<string, LanguageDetails>();

  private readonly language = new StringStorage('rosary.language');

  private _activeLanguageId: string;
  private _activeLanguage: LanguageDetails;

  constructor(private appConfig: AppConfigService) {
    this.supportedLanguages.set('en', { name: this.languageEnglish, reference: 'https://austindiocese.org/documents/2017/8/The%20Rosary_for%20web.pdf' });
    this.supportedLanguages.set('es', { name: this.languageSpanish, reference: 'https://austindiocese.org/documents/2017/8/Spanish%20Rosary_for%20web.pdf' });
    
    this.loadActiveLanguageId();
  }

  get languageEnglish(): string {
    return $localize`:@@lang-english:English`;
  }

  get languageSpanish(): string {
    return $localize`:@@lang-spanish:Spanish`;
  }

  get activeLanguageId(): string {
    return this._activeLanguageId;
  }

  set activeLanguageId(languageId: string) {
    let workingId = languageId;
    if (workingId && workingId.length > 2) {
      workingId = workingId.substring(0, 2);
    }
    if (!this.isSupportedLanguageId(workingId)) {
      workingId = this.appConfig.defaultLanguageId;
      console.log(`Browser language id not supported. Using default: ${workingId}`);
    }
    this._activeLanguageId = workingId;
    this.updateActiveLanguageData();
    this.language.data = this._activeLanguageId;
  }

  get activeLanguageName(): string {
    return this._activeLanguage?.name;
  }

  get activeLanguageReference(): string {
    return this._activeLanguage?.reference;
  }

  isSupportedLanguageId(languageId: string): boolean {
    return this.supportedLanguages.has(languageId);
  }

  checkForRedirect() {
    const languageId = this.activeLanguageId;
    const languageSupported = this.isSupportedLanguageId(languageId);
    const currentCorrect = this.currentUrlCorrectLanguage(languageId);

    console.log(`language: ${languageId}, languageSupported: ${languageSupported}, currentCorrect: ${currentCorrect}`);

    if (languageSupported && !currentCorrect) {
      const redirectUrl = `/${this.appConfig.appName}/${languageId}`;
      console.log(`Redirect for language triggered: ${redirectUrl} - enabled? ${environment.redirect !== false}`);

      if (environment.redirect === false) {
        return;
      }

      window.location.href = redirectUrl;
    }
  }

  private currentUrlCorrectLanguage(languageId: string): boolean {
    let useSubstring = '/' + languageId;
    if (window.location.href.endsWith(useSubstring)) {
      return true;
    }
    useSubstring += '/';
    return window.location.href.endsWith(useSubstring);
  }

  private loadActiveLanguageId() {
    this._activeLanguageId = this.language.data;
    if (this._activeLanguageId === undefined) {
      this.activeLanguageId = window.navigator.language;
    }
    console.log(`stateStorage language: ${this._activeLanguageId}`);
    this.updateActiveLanguageData();
  }

  private updateActiveLanguageData() {
    this._activeLanguage = this.supportedLanguages.get(this._activeLanguageId);
  }

}

export interface LanguageDetails {
  name: string;
  reference?: string;
}