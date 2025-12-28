import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service';
import { LanguageItem, LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { TranslateService } from '@ngx-translate/core';
import { SupportedLanguagesService } from '../../../services/supported-languages.service';

@Component({
  selector: 'app-device-details',
  standalone: true,
  imports: [LanguageSelectorComponent],
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  readonly languageSelectorList: LanguageItem[];

  readonly name = 'DeviceDetailsComponent';

  static isTypeOf(obj: any): boolean {
    const checkObj = obj as DeviceDetailsComponent;
    console.log(`checkObj = ${checkObj?.name}`);
    return checkObj?.name === 'DeviceDetailsComponent' && checkObj?.languageSelectorList !== undefined;
  }

  constructor(private appConfig: AppConfigService,
              private supportedLanguagesService: SupportedLanguagesService,
              private translateService: TranslateService) {

    this.languageSelectorList = [];
    this.supportedLanguagesService.getSupportedLanguagesMap().forEach((value, key) => {
      this.languageSelectorList.push({ value: key, displayValue: value?.id })
    });
    console.log(`DeviceDetailsComponent - constructor`);
  }

  ngOnInit(): void {
    console.log(`DeviceDetailsComponent - ngOnInit`);
  }

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

  get navigationChecked(): boolean {
    console.log(`navigation checked? ${this.appConfig?.isNavigationEnabled}`);
    return this.appConfig?.isNavigationEnabled;
  }

  get enableNavigation(): string {
    return this.translateService.instant('navigationChecked');
  }

  onLanguageSelectionChange(code: string) {
    this.supportedLanguagesService.assignActiveLanguageIdFromCode(code);
  }

  onNavigationChecked(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.appConfig.setNavigationEnabled(isChecked);
  }

}
