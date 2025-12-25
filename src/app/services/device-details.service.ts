import { Injectable } from "@angular/core";
import { AppConfigService } from "./app-config.service";

@Injectable({
  providedIn: 'root'
})
export class DeviceDetailsService {

  constructor(private appConfig: AppConfigService) { }

  get appNameVersion(): string {
    return `${this.appConfig.appName} - ${this.appConfig.appVersion}`;
  }

  get isPortrait(): boolean {
    return this.appConfig?.isPortrait;
  }

  get userAgent(): string {
    return window?.navigator?.userAgent;
  }

  get windowInnerDimension(): any {
    return `${window?.innerWidth} x ${window?.innerHeight}`;
  }

  get windowOuterDimension(): any {
    return `${window?.outerWidth} x ${window?.outerHeight}`;
  }

  get windowDevicePixelRatio(): any {
    return window.devicePixelRatio;
  }

}
