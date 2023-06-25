import { EventEmitter, Injectable } from '@angular/core';
import { AppDateService } from './app-date.service';
import { LocalizationService } from './localization.service';

const pkgAppName = require('../../../package.json').name;
const pkgAppVersion = require('../../../package.json').version;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  screenOrientationChangeEvent = new EventEmitter<boolean>();

  readonly appName: string = pkgAppName;
  readonly appVersion: string = pkgAppVersion;

  private _isPortrait: boolean;

  private _isFullscreen: boolean;

  constructor(public readonly appDate: AppDateService,
              public readonly localization: LocalizationService) { }

  toggleView(): void {
    this._isFullscreen = !this._isFullscreen;
  }

  get isFullscreen(): boolean {
    return this._isFullscreen;
  }

  get isPortrait(): boolean {
    return this._isPortrait;
  }

  set isPortrait(portrait: boolean) {
    this._isPortrait = portrait;
    this.screenOrientationChangeEvent.emit(portrait);
  }

  get defaultLanguageId(): string {
    return 'en';
  }
}
