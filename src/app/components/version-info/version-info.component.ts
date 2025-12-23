import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-version-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './version-info.component.html',
  styleUrl: './version-info.component.scss'
})
export class VersionInfoComponent {

  @Input()
  hideBorder: boolean;

  @Input()
  appTitle: string;

  @Input()
  appVersion: string;

  constructor() {
  }

  get borderClass(): string {
    return this.hideBorder
      ? ''
      : 'content-border';
  }
    
}
