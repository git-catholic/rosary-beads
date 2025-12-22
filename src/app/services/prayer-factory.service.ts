import { Injectable, Type } from '@angular/core';
import { PatsBeadsComponent } from '../rosary-beads/pats-beads/pats-beads.component';
import { RosaryBeads } from '../rosary-beads/rosary-beads';
import { MysteryGlorious } from '../models/holy-rosary/mystery-glorious';
import { Mysteries } from '../models/holy-rosary/mysteries';
import { MysteryJoyful } from '../models/holy-rosary/mystery-joyful';
import { MysteryLuminous } from '../models/holy-rosary/mystery-luminous';
import { MysterySorrowful } from '../models/holy-rosary/mystery-sorrowful';
import { AppConfigService } from './app-config.service';
import { PrayerHolyRosary } from '../models/holy-rosary/prayer-holy-rosary';
import { LocalizationService } from './localization.service';
import { RosaryMysteriesEnum } from '../utils/rosary-mysteries-enum';

@Injectable({
  providedIn: 'root'
})
export class PrayerFactoryService {

  constructor(private appConfig: AppConfigService,
              private localizationService: LocalizationService) { }

  newBeadsByType(name: string): Type<RosaryBeads> {
    return PatsBeadsComponent;
  }

  newPrayerMystery(mystery: RosaryMysteriesEnum): Mysteries {
    if (RosaryMysteriesEnum.GLORIOUS === mystery) {
      return new MysteryGlorious();
    }
    else if (RosaryMysteriesEnum.JOYFUL === mystery) {
      return new MysteryJoyful();
    }
    else if (RosaryMysteriesEnum.LUMINOUS === mystery) {
      return new MysteryLuminous();
    }
    return new MysterySorrowful();
  }

  newRosaryPrayer(mysteries: Mysteries, rosaryBeads: RosaryBeads): PrayerHolyRosary {
    return new PrayerHolyRosary(this.localizationService, mysteries, rosaryBeads);
  }

}

