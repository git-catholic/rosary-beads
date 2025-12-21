import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { LiturgicalYearService } from './services/liturgical-year.service';
import { LocalizationService } from './services/localization.service';
import { SupportedLanguagesService } from './services/supported-languages.service';
import { TranslateService } from '@ngx-translate/core';
import { StringStorage } from './services/state-storage.service';

declare var require: any;

const pkgAppVersion = require('../../package.json').version;

export const REPLACE_WITH_TRANSLATION = 'REPLACE_WITH_TRANSLATION';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title: string;

  readonly appVersion: string = pkgAppVersion;

  @ViewChild('tap1')
  private tapRef1!: ElementRef<HTMLAudioElement>;
  private tap1!: HTMLAudioElement | undefined;

  @ViewChild('tap2')
  private tapRef2!: ElementRef<HTMLAudioElement>;
  private tap2!: HTMLAudioElement | undefined;

  private readonly language = new StringStorage('rosary.language');

  constructor(private appConfig: AppConfigService,
              private liturgicalYear: LiturgicalYearService,
              localizationService: LocalizationService,
              //private translate: TranslateService,
              supportedLanguagesService: SupportedLanguagesService) {

    this.title = localizationService.appTitle;
    this.checkOrientation();
    console.log(`user-agent: ${window.navigator.userAgent}`);
    console.log(`language: ${this.language?.data}`);
    supportedLanguagesService.assignActiveLanguageIdFromCode(this.language?.data);
  }

  ngAfterViewInit(): void {
    this.tap1 = this.extractAudioElement(this.tapRef1);
    this.tap2 = this.extractAudioElement(this.tapRef2, 0.5);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkOrientation();
  }

  backgroundImageClass(): string {
    const color = this.liturgicalYear.liturgicalColor();
    return `lit-color-${color.toString().toLowerCase()}`;
  }

  tap1mp3(): string {
    return window.location.href + '/assets/Tapping-1.mp3';
  }

  tap1ogg(): string {
    return window.location.href + '/assets/Tapping-1.ogg';
  }

  tap2mp3(): string {
    return window.location.href + '/assets/Tapping-2.mp3';
  }

  tap2ogg(): string {
    return window.location.href + '/assets/Tapping-2.ogg';
  }

  private checkOrientation(): void {
    if (window.matchMedia('(orientation: portrait)').matches) {
      // console.log(`you're in PORTRAIT mode - ${window.innerWidth}, ${window.innerHeight}`);
      this.appConfig.isPortrait = true;
    }
    else
    if (window.matchMedia('(orientation: landscape)').matches) {
      // console.log(`you're in LANDSCAPE mode - ${window.innerWidth}, ${window.innerHeight}`);
      this.appConfig.isPortrait = false;
    }
    else {
      this.appConfig.isPortrait = false;
    }
  }

  private extractAudioElement(elementRef: ElementRef<HTMLAudioElement>, volume = 0.3): HTMLAudioElement | undefined {
    if (elementRef?.nativeElement) {
      const element = elementRef.nativeElement;
      element.volume = volume;
      return element;
    }
    return undefined;
  }
}
