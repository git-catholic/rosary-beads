import { BeadGroup } from '../models/bead-group';
import { initBeadGroup } from '../models/bead-group-template';
import { fruitByNumber, Mysteries, mysteryByNumber } from '../models/mysteries';
import { LocalizationService } from '../services/localization.service';
import { HolyRosaryBeadGroupList } from '../models/holy-rosary-bead-group-list';
import { SIGN_CROSS, APOSTLES_CREED, OUR_FATHER, OPENING_HAIL_MARYS, GLORY, MYSTERY_1, HAIL_MARYS, GLORY_FATIMA, MYSTERY_2, MYSTERY_3, MYSTERY_4, MYSTERY_5, HAIL_HOLY_QUEEN, CLOSING_1, FATIMA, CLOSING_2 } from './rosary-helper';

/*
IMPORTANT: If you change the order of prayers (ie: loadContemporaryHolyRosary),
           you also need to check that it matches up with the bead arrays.

           Search for things like:
             export const PATS_BEADS_COORDS: BeadPosition[]
*/

export class ContemporaryRosary extends HolyRosaryBeadGroupList {
 
  private activeMysteries: Mysteries;
  private activeMysteriesIdx: number;

  constructor(private localizationUtil: LocalizationService, mysteries?: Mysteries) {
    super(loadContemporaryHolyRosary());
    console.log(`Contemporary - ${mysteries.mysterySequenceName}`);
    this.activeMysteries = mysteries;
    this.activeMysteriesIdx = 0;

  }

  prayerName(): string {
    return this.localizationUtil.prayerHolyRosary;
  }

  mysterySequenceName(): string {
    return this.activeMysteries.mysterySequenceName;
  }

  mysteryNumber(): number {
    return this.activeMysteriesIdx;
  }

  mystery(): string {
    return mysteryByNumber(this.activeMysteries, this.activeMysteriesIdx);
  }

  fruit(): string {
    return fruitByNumber(this.activeMysteries, this.activeMysteriesIdx);
  }


  protected onNextStart(): void { }

  protected onNextBeadGroupDone(): void {
      if (this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx) {
        this.activeMysteriesIdx++;
      }
  }

  protected onNextBeadGroupContinued(): void { }

  protected onNextEnd(): void { }

  protected onPreviousStart(): void { }

  protected onPreviousBead(): void { }

  protected onPreviousBeadGroup(): void {
      const lastWasMystery = this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx;

      if (lastWasMystery) {
        this.activeMysteriesIdx--;
      }
  }

  protected onPreviousEnd(): void { }
}

export interface BeadGroupContainer {
  beadGroups: BeadGroup[];
  beadMap: Map<string, BeadGroup>;
}

function loadContemporaryHolyRosary(): BeadGroupContainer {
  let beadGroupIndex = 0;
  let mysteryIdx = 0;
  const beadMap = new Map<string, BeadGroup>();

  const beadGroups = [
    initBeadGroup(beadMap, SIGN_CROSS, undefined, beadGroupIndex++),

    initBeadGroup(beadMap, APOSTLES_CREED, undefined, beadGroupIndex++, 'a'),
    initBeadGroup(beadMap, OUR_FATHER, undefined, beadGroupIndex++, 'a'),
    initBeadGroup(beadMap, OPENING_HAIL_MARYS, undefined, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, undefined, beadGroupIndex++, 'b'),

    initBeadGroup(beadMap, MYSTERY_1, mysteryIdx, beadGroupIndex++, 'b'),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'c'),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'c'),

    initBeadGroup(beadMap, MYSTERY_2, mysteryIdx, beadGroupIndex++, 'c'),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'c'),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'd'),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'd'),

    initBeadGroup(beadMap, MYSTERY_3, mysteryIdx, beadGroupIndex++, 'd'),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'd'),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'e'),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'e'),

    initBeadGroup(beadMap, MYSTERY_4, mysteryIdx, beadGroupIndex++, 'e'),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'e'),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'f'),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'f'),

    initBeadGroup(beadMap, MYSTERY_5, mysteryIdx, beadGroupIndex++, 'f'),
    initBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'f'),
    initBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'g'),
    initBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'g'),

    initBeadGroup(beadMap, HAIL_HOLY_QUEEN, undefined, beadGroupIndex++, 'g'),
    initBeadGroup(beadMap, CLOSING_1, undefined, beadGroupIndex++, 'g'),
    initBeadGroup(beadMap, CLOSING_2, undefined, beadGroupIndex++, 'g'),
    initBeadGroup(beadMap, SIGN_CROSS, undefined, beadGroupIndex++)
  ];

  return {
    beadGroups,
    beadMap
  };
}
