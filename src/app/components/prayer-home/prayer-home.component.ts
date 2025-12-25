import { Component } from '@angular/core';
import { LiturgicalDatesComponent } from '../liturgical-dates/liturgical-dates.component';
import { VersionInfoComponent } from '../version-info/version-info.component';
import { Router } from '@angular/router';
import { HOLY_ROSARY_HOME } from '../../app-routing.module';
import { LocalizationService } from '../../services/localization.service';

@Component({
  selector: 'app-prayer-home',
  standalone: true,
  imports: [
    LiturgicalDatesComponent,
    VersionInfoComponent
  ],
  templateUrl: './prayer-home.component.html',
  styleUrl: './prayer-home.component.scss'
})
export class PrayerHomeComponent {

  constructor(private router: Router,
              private localizationService: LocalizationService) { }
  
  onClickHolyRosary() {
    this.router.navigate([HOLY_ROSARY_HOME]);
  }

  onClickDivineMercy() {
    console.log(`navigate to divine mercy`);
  }

  importantDatesLabel(): string {
    return this.localizationService.importantDates;
  }
  
}
