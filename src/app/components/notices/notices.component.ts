import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';
import { LiturgicalDatesComponent } from '../liturgical-dates/liturgical-dates.component';
import { VersionInfoComponent } from '../version-info/version-info.component';
import { LocalizationService } from '../../services/localization.service';
import { CommonModule } from '@angular/common';
import { VisibilityCheckDirective } from '../../directives/visibility-check/visibility-check.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [
    CommonModule,
    LiturgicalDatesComponent,
    TranslateModule,
    VersionInfoComponent,
    VisibilityCheckDirective
  ],
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent {

  @ViewChild('versionInfo', { read: ElementRef })
  versionInfoRef: ElementRef;

  @ViewChild('versionInfo')
  versionInfo: VersionInfoComponent;
  
  appVersion: string;

  displayVerticalVersion = true;

  constructor(appConfig: AppConfigService,
              private localizationService: LocalizationService) {
    this.appVersion = appConfig.appVersion;
  }

  appTitle(): string {
    return this.localizationService.appTitle;
  }

  importantDatesLabel(): string {
    return this.localizationService.importantDates;
  }

  isVersionFooterVisible(): boolean {
    console.log(`footer id: ${this.versionInfoRef?.nativeElement} - ${this.versionInfoRef?.nativeElement?.checkVisibility() || false}`);
    console.log(`component: ${this.versionInfo?.appVersion}`);
    return this.versionInfoRef?.nativeElement?.checkVisibility() || false;
  }

  onVersionVisibleChanged(visible: boolean) {
    this.displayVerticalVersion = !visible;
  }

}
