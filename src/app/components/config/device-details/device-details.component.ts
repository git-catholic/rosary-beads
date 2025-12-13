import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-device-details',
  standalone: true,
  imports: [LanguageSelectorComponent],
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void { }

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
