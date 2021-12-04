import { Mysteries } from 'src/app/models/mysteries';
import { LocalizationService } from 'src/app/services/localization.service';

export class MysteryJoyful implements Mysteries {

  constructor(private localizationUtil: LocalizationService) { }

  get mysterySequenceName(): string {
    return this.localizationUtil.joyfulMysteryLabel;
  }

  get mystery1(): string {
    return $localize`:@@joyful-mystery-1:The Annunciation`;
  }

  get fruit1(): string {
    return $localize`:@@joyful-fruit-1:Humility`;
  }

  get mystery2(): string {
    return $localize`:@@joyful-mystery-2:The Visitation`;
  }

  get fruit2(): string {
    return $localize`:@@joyful-fruit-2:Charity`;
  }

  get mystery3(): string {
    return $localize`:@@joyful-mystery-3:Birth of our Lord`;
  }

  get fruit3(): string {
    return $localize`:@@joyful-fruit-3:Poverty; detachment from the world`;
  }

  get mystery4(): string {
    return $localize`:@@joyful-mystery-4:The Presentation`;
  }

  get fruit4(): string {
    return $localize`:@@joyful-fruit-4:Obedience`;
  }

  get mystery5(): string {
    return $localize`:@@joyful-mystery-5:The Finding of our Lord in the temple`;
  }

  get fruit5(): string {
    return $localize`:@@joyful-fruit-5:Piety`;
  }

}
