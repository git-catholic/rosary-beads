import { Component } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-version-info',
  standalone: true,
  templateUrl: './version-info.component.html',
  styleUrl: './version-info.component.scss'
})
export class VersionInfoComponent {

    appVersion: string;
  
    constructor(appConfig: AppConfigService) {
      this.appVersion = appConfig.appVersion;
    }
    
}
