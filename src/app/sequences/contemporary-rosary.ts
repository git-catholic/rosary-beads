import { BeadGroup } from '../models/bead-group';
import { initBasicBeadGroup, initMysteryBeadGroup } from '../models/bead-group-template';
import { fruitByNumber, Mysteries, mysteryByNumber } from '../models/mysteries';
import { LocalizationService } from '../services/localization.service';
import { HolyRosaryBeadGroupList } from '../models/holy-rosary-bead-group-list';
import { SIGN_CROSS, APOSTLES_CREED, OUR_FATHER, OPENING_HAIL_MARYS, GLORY, MYSTERY_1, HAIL_MARYS, GLORY_FATIMA, MYSTERY_2, MYSTERY_3, MYSTERY_4, MYSTERY_5, HAIL_HOLY_QUEEN, CLOSING_1, FATIMA, CLOSING_2 } from './rosary-helper';
import { BeadGroupContainer } from '../models/bead-group-container';

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

function loadContemporaryHolyRosary(): BeadGroupContainer {
  let beadGroupIndex = 0;
  let mysteryIdx = 0;
  const beadMap = new Map<string, BeadGroup>();

  const beadGroups = [
    initBasicBeadGroup(beadMap, SIGN_CROSS, beadGroupIndex++),

    initBasicBeadGroup(beadMap, APOSTLES_CREED, beadGroupIndex++, 'a'),
    initBasicBeadGroup(beadMap, OUR_FATHER, beadGroupIndex++, 'a'),
    initBasicBeadGroup(beadMap, OPENING_HAIL_MARYS, beadGroupIndex++),
    initBasicBeadGroup(beadMap, GLORY, beadGroupIndex++, 'b'),

    initMysteryBeadGroup(beadMap, MYSTERY_1, mysteryIdx, beadGroupIndex++, 'b'),
    initMysteryBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++),
    initMysteryBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initMysteryBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'c'),
    initMysteryBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'c'),

    initMysteryBeadGroup(beadMap, MYSTERY_2, mysteryIdx, beadGroupIndex++, 'c'),
    initMysteryBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'c'),
    initMysteryBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initMysteryBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'd'),
    initMysteryBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'd'),

    initMysteryBeadGroup(beadMap, MYSTERY_3, mysteryIdx, beadGroupIndex++, 'd'),
    initMysteryBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'd'),
    initMysteryBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initMysteryBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'e'),
    initMysteryBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'e'),

    initMysteryBeadGroup(beadMap, MYSTERY_4, mysteryIdx, beadGroupIndex++, 'e'),
    initMysteryBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'e'),
    initMysteryBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initMysteryBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'f'),
    initMysteryBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'f'),

    initMysteryBeadGroup(beadMap, MYSTERY_5, mysteryIdx, beadGroupIndex++, 'f'),
    initMysteryBeadGroup(beadMap, OUR_FATHER, mysteryIdx, beadGroupIndex++, 'f'),
    initMysteryBeadGroup(beadMap, HAIL_MARYS, mysteryIdx, beadGroupIndex++),
    initMysteryBeadGroup(beadMap, GLORY, mysteryIdx, beadGroupIndex++, 'g'),
    initMysteryBeadGroup(beadMap, FATIMA, mysteryIdx++, beadGroupIndex++, 'g'),

    initBasicBeadGroup(beadMap, HAIL_HOLY_QUEEN, beadGroupIndex++, 'g'),
    initBasicBeadGroup(beadMap, CLOSING_1, beadGroupIndex++, 'g'),
    initBasicBeadGroup(beadMap, CLOSING_2, beadGroupIndex++, 'g'),
    initBasicBeadGroup(beadMap, SIGN_CROSS, beadGroupIndex++)
  ];

  return {
    beadGroups,
    beadMap
  };
}
