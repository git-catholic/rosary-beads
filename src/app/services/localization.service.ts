import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private translate: TranslateService) { }

  get appTitle(): string {
    return $localize`:@@rosaryTitle:Rosary Beads`;
  }

  get liturgicalPeriod(): string {
    return $localize`:@@lit-dates.period:Liturgical period`;
  }

  get importantDates(): string {
    return $localize`:@@lit-dates.important-times:Important Times`;
  }

  get prayerHolyRosary(): string {
    return $localize`:@@prayerHolyRosary:The Holy Rosary`;
  }

  get adventLabel(): string {
    return $localize`:@@adventLabel:Advent`;
  }

  get christmasLabel(): string {
    return $localize`:@@christmasLabel:Christmas`;
  }

  get lentLabel(): string {
    return $localize`:@@lentLabel:Lent`;
  }

  get triduumLabel(): string {
    return $localize`:@@triduumLabel:Holy Triduum`;
  }

  get holyThursdayLabel(): string {
    return $localize`:@@holyThursday:Holy Thursday`;
  }

  get goodFridayLabel(): string {
    return $localize`:@@goodFridayLabel:Good Friday`;
  }

  get holySaturdayLabel(): string {
    return $localize`:@@holySaturdayLabel:Holy Saturday`;
  }

  get easterLabel(): string {
    return $localize`:@@easterLabel:Easter`;
  }

  get easterSundayLabel(): string {
    return $localize`:@@easterSundayLabel:Easter Sunday`;
  }

  get gloriousMysteryLabel(): string {
    //return $localize`:@@glorious:Glorious`;
    return this.translate.instant('glorious');
  }

  get joyfulMysteryLabel(): string {
    // return $localize`:@@joyful:Joyful`;
    return this.translate.instant('joyful');
  }

  get luminousMysteryLabel(): string {
    // return $localize`:@@luminous:Luminous`;
    return this.translate.instant('luminous');
  }

  get sorrowfulMysteryLabel(): string {
    // return $localize`:@@sorrowful:Sorrowful`;
    return this.translate.instant('sorrowful');
  }

}
