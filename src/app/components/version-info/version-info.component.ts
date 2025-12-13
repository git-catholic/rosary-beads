import { Component } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-version-info',
  standalone: true,
  templateUrl: './version-info.component.html',
  styleUrl: './version-info.component.scss'
})
export class VersionInfoComponent {

  title: string;
  appVersion: string;

  constructor(appConfig: AppConfigService,
              localizationService: LocalizationService) {
    this.title = localizationService.appTitle;
    this.appVersion = appConfig.appVersion;
  }
    
}
