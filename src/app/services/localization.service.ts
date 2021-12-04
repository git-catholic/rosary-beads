import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() { }

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
    return $localize`:@@glorious:Glorious`;
  }

  get joyfulMysteryLabel(): string {
    return $localize`:@@joyful:Joyful`;
  }

  get luminousMysteryLabel(): string {
    return $localize`:@@luminous:Luminous`;
  }

  get sorrowfulMysteryLabel(): string {
    return $localize`:@@sorrowful:Sorrowful`;
  }

}
