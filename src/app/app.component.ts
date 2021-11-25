import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { version } from '../../package.json';
import { AppConfigService } from './services/app-config.service';
import { LiturgicalYearService } from './services/liturgical-year.service';
import { SoundService } from './services/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = $localize`:@@rosaryTitle:Rosary Beads`;

  appVersion: string = version;

  @ViewChild('tap1')
  private tapRef1: ElementRef<HTMLAudioElement>;
  private tap1: HTMLAudioElement;

  @ViewChild('tap2')
  private tapRef2: ElementRef<HTMLAudioElement>;
  private tap2: HTMLAudioElement;

  constructor(public liturgicalYear: LiturgicalYearService,
              private appConfig: AppConfigService,
              private soundService: SoundService) {
    this.checkOrientation();
    console.log(`user-agent: ${window.navigator.userAgent}`);
  }

  ngAfterViewInit(): void {
    this.tap1 = this.extractAudioElement(this.tapRef1);
    this.tap2 = this.extractAudioElement(this.tapRef2, 0.5);

    if (this.soundService) {
      this.soundService.tap1 = this.tap1;
      this.soundService.tap2 = this.tap2;
    }
  }

  backgroundImageClass(): string {
    const color = this.liturgicalYear.liturgicalColor();
    return `lit-color-${color.toString().toLowerCase()}`;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkOrientation();
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
      this.appConfig.isPortrait = undefined;
    }
  }

  private extractAudioElement(elementRef: ElementRef<HTMLAudioElement>, volume = 0.3): HTMLAudioElement {
    if (elementRef?.nativeElement) {
      const element = elementRef.nativeElement;
      element.volume = volume;
      return element;
    }
    return undefined;
  }
}
