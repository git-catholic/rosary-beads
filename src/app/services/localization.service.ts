import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private translate: TranslateService) { }

  get appTitle(): string {
    return this.translate.instant('rosaryTitle');
  }

  get liturgicalPeriod(): string {
    return this.translate.instant('lit-dates.period');
  }

  get importantDates(): string {
    return this.translate.instant('lit-dates.important-times');
  }

  get prayerHolyRosary(): string {
    return this.translate.instant('prayerHolyRosary');
  }

  get adventLabel(): string {
    return this.translate.instant('adventLabel');
  }

  get christmasLabel(): string {
    return this.translate.instant('christmasLabel');
  }

  get lentLabel(): string {
    return this.translate.instant('lentLabel');
  }

  get triduumLabel(): string {
    return this.translate.instant('triduumLabel');
  }

  get holyThursdayLabel(): string {
    return this.translate.instant('holyThursday');
  }

  get goodFridayLabel(): string {
    return this.translate.instant('goodFridayLabel');
  }

  get holySaturdayLabel(): string {
    return this.translate.instant('holySaturdayLabel');
  }

  get easterLabel(): string {
    return this.translate.instant('easterLabel');
  }

  get easterSundayLabel(): string {
    return this.translate.instant('easterSundayLabel');
  }

  get gloriousMysteryLabel(): string {
    return this.translate.instant('glorious');
  }

  get joyfulMysteryLabel(): string {
    return this.translate.instant('joyful');
  }

  get luminousMysteryLabel(): string {
    return this.translate.instant('luminous');
  }

  get sorrowfulMysteryLabel(): string {
    return this.translate.instant('sorrowful');
  }

}
