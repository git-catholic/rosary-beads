import { Injectable } from '@angular/core';
import { BeadGroupList } from '../models/bead-group-list';
import { Mysteries } from '../models/mysteries';
import { ContemporaryRosary } from '../sequences/contemporary-rosary';
import { RosaryMysteriesEnum, lookupMystery } from '../sequences/rosary-helper';
import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root'
})
export class BeadGroupLoaderService {

  constructor(private localizationUtil: LocalizationService) { }

  loadHolyRosaryContemporaryMysteryEnum(mysteryEnum: RosaryMysteriesEnum): BeadGroupList {
    const mystery = lookupMystery(this.localizationUtil, mysteryEnum);
    return new ContemporaryRosary(this.localizationUtil, mystery);
  }

  loadHolyRosaryContemporary(mystery: Mysteries): BeadGroupList {
    return new ContemporaryRosary(this.localizationUtil, mystery);
  }

}
