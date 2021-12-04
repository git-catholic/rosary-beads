import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  appVersion: string;

  constructor(appConfig: AppConfigService) {
    this.appVersion = appConfig.appVersion;
  }

  ngOnInit(): void {
  }

}
