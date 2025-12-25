import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { StateStorageService } from './state-storage.service';

declare var require: any;

const pkgAppName = require('../../../package.json').name;
const pkgAppVersion = require('../../../package.json').version;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  screenOrientationChangeEvent = new EventEmitter<boolean>();

  readonly appName: string = pkgAppName;
  readonly appVersion: string = pkgAppVersion;
  readonly useDebugImage: boolean;

  private _isPortrait!: boolean;

  private _isFullscreen!: boolean;

  constructor(private stateStorageService: StateStorageService) {
    this.useDebugImage = environment.useDebugImage;
  }

  toggleView(): void {
    this._isFullscreen = !this._isFullscreen;
  }

  get hasMultiPrayerSupport(): boolean {
    return false;
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

  get isNavigationEnabled(): boolean {
    return this.stateStorageService?.navigationOnFlag?.data;
  }

}
