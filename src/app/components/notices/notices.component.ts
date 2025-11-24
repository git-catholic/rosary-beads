import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';
import { LiturgicalDatesComponent } from '../liturgical-dates/liturgical-dates.component';
import { VersionInfoComponent } from '../version-info/version-info.component';

@Component({
  selector: 'app-notices',
  imports: [
    LiturgicalDatesComponent,
    VersionInfoComponent
  ],
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
  standalone: true
})
export class NoticesComponent implements OnInit {

  appVersion: string;

  constructor(appConfig: AppConfigService) {
    this.appVersion = appConfig.appVersion;
  }

  ngOnInit(): void {
  }

}
