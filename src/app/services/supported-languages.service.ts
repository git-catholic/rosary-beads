import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfigService } from './app-config.service';
import { StringStorage } from './state-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SupportedLanguagesService {

  readonly supportedLanguages = new Map<string, string>();

  private readonly language = new StringStorage('rosary.language');

  private _activeLanguageId: string;

  constructor(private appConfig: AppConfigService) {
    this.supportedLanguages.set('en', this.languageEnglish);
    this.supportedLanguages.set('es', this.languageSpanish);
    
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
    this.language.data = this._activeLanguageId;
  }

  isSupportedLanguageId(languageId: string): boolean {
    return this.supportedLanguages.has(languageId);
  }

  checkForRedirect(route?: string) {
    const languageId = this.activeLanguageId;
    const languageSupported = this.isSupportedLanguageId(languageId);
    const currentCorrect = this.currentUrlCorrectLanguage(languageId);
    const routeSegment = (route) ? `/${route}` : '';

    console.log(`language: ${languageId}, languageSupported: ${languageSupported}, currentCorrect: ${currentCorrect}`);

    if (environment.redirect && languageSupported && !currentCorrect) {
      const redirectUrl = `/${this.appConfig.appName}/${languageId}${routeSegment}`;

      window.location.href = redirectUrl;
    }
    else if (routeSegment.length > 0) {
      window.location.href = routeSegment;
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
  }

}
