import { Injectable } from '@angular/core';
import { BeadGroupContainer } from '../models/bead-group-container';
import { HolyRosaryBeadGroupList } from '../models/holy-rosary-bead-group-list';
import { Mysteries } from '../models/mysteries';
import { ContemporaryRosary } from '../sequences/contemporary-rosary';
import { DivineMercy } from '../sequences/divine-mercy';
import { RosaryMysteriesEnum, lookupMystery } from '../sequences/rosary-helper';
import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root'
})
export class BeadGroupLoaderService {

  constructor(private localizationUtil: LocalizationService) { }

  loadDivineMercyChaplet(): DivineMercy {
    return new DivineMercy(this.localizationUtil);
  }

  loadHolyRosaryContemporaryMysteryEnum(mysteryEnum: RosaryMysteriesEnum): HolyRosaryBeadGroupList {
    const mystery = lookupMystery(this.localizationUtil, mysteryEnum);
    return new ContemporaryRosary(this.localizationUtil, mystery);
  }

  loadHolyRosaryContemporary(mystery: Mysteries): HolyRosaryBeadGroupList {
    return new ContemporaryRosary(this.localizationUtil, mystery);
  }

}
