import { BeadGroupTemplate } from "../models/bead-group-template";
import { MysteryGlorious } from "../rosary-prayers/holy-rosary/mysteries/mystery-glorious";
import { MysteryJoyful } from "../rosary-prayers/holy-rosary/mysteries/mystery-joyful";
import { MysteryLuminous } from "../rosary-prayers/holy-rosary/mysteries/mystery-luminous";
import { MysterySorrowful } from "../rosary-prayers/holy-rosary/mysteries/mystery-sorrowful";
import { LocalizationService } from "../services/localization.service";

export enum RosaryMysteriesEnum {
  GLORIOUS,
  JOYFUL,
  LUMINOUS,
  SORROWFUL
}

export function lookupMystery(localizationUtil: LocalizationService, mysteryEnum: RosaryMysteriesEnum) {
  if (RosaryMysteriesEnum.GLORIOUS === mysteryEnum) {
    return new MysteryGlorious(localizationUtil);
  }
  else if (RosaryMysteriesEnum.JOYFUL === mysteryEnum) {
    return new MysteryJoyful(localizationUtil);
  }
  else if (RosaryMysteriesEnum.LUMINOUS === mysteryEnum) {
    return new MysteryLuminous(localizationUtil);
  }
  else if (RosaryMysteriesEnum.SORROWFUL === mysteryEnum) {
    return new MysterySorrowful(localizationUtil);
  }
  return undefined;
}

export const MYSTERY_1: BeadGroupTemplate = {
  sequence: 'mystery-1',
  sequenceId: 'mystery-1'
}

export const MYSTERY_2: BeadGroupTemplate = {
  sequence: 'mystery-2',
  sequenceId: 'mystery-2'
}

export const MYSTERY_3: BeadGroupTemplate = {
  sequence: 'mystery-3',
  sequenceId: 'mystery-3'
}

export const MYSTERY_4: BeadGroupTemplate = {
  sequence: 'mystery-4',
  sequenceId: 'mystery-4'
}

export const MYSTERY_5: BeadGroupTemplate = {
  sequence: 'mystery-5',
  sequenceId: 'mystery-5'
}

export const SIGN_CROSS: BeadGroupTemplate = {
  sequence: 'sign-cross',
  sequenceId: 'sign-cross',
  prayerIds: [
    '@@sign-cross'
  ]
}

export const APOSTLES_CREED: BeadGroupTemplate = {
  sequence: 'creed',
  sequenceId: 'creed',
  repeatCount: 0,
  prayerIds: [
    '@@creed'
  ]
};

export const OUR_FATHER: BeadGroupTemplate = {
  sequence: 'our-father',
  sequenceId: 'our-father',
  repeatCount: 0,
  prayerIds: [
    '@@our-father'
  ]
};

export const OPENING_HAIL_MARYS: BeadGroupTemplate = {
  sequence: 'hail-mary',
  sequenceId: 'hail-mary',
  repeatCount: 3,
  prayerIds: [
    '@@hail-mary'
  ]
}

export const HAIL_MARYS: BeadGroupTemplate = {
  sequence: 'hail-mary',
  sequenceId: 'hail-mary',
  repeatCount: 10,
  prayerIds: [
    '@@hail-mary'
  ]
}

export const GLORY: BeadGroupTemplate = {
  sequence: 'glory',
  sequenceId: 'glory',
  repeatCount: 0,
  prayerIds: [
    '@@glory'
  ],
  phoneFeedback: 'long'
}

export const FATIMA: BeadGroupTemplate = {
  sequence: 'fatima',
  sequenceId: 'fatima',
  repeatCount: 0,
  prayerIds: [
    '@@fatima'
  ],
  phoneFeedback: 'skip'
}

export const GLORY_FATIMA: BeadGroupTemplate = {
  sequence: 'glory-fatima',
  sequenceId: 'glory-fatima',
  repeatCount: 0,
  prayerIds: [
    '@@glory',
    '@@fatima'
  ],
  phoneFeedback: 'long'
}

export const HAIL_HOLY_QUEEN: BeadGroupTemplate = {
  sequence: 'hail-holy-queen',
  sequenceId: 'hail-holy-queen',
  phoneFeedback: 'long',
  incrementMysteryIdx: true
}

export const CLOSING_1: BeadGroupTemplate = {
  sequence: 'closing1',
  sequenceId: 'closing1',
  repeatCount: 0,
  prayerIds: [
    '@@closing-1'
  ]
}

export const CLOSING_2: BeadGroupTemplate = {
  sequence: 'closing2',
  sequenceId: 'closing2',
  repeatCount: 0,
  prayerIds: [
    '@@closing-2'
  ]
}
