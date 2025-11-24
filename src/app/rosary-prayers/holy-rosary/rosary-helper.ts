import { BeadGroupTemplate } from "../../models/beads/bead-group-template";
import { MysteryGlorious } from "../../models/holy-rosary/mystery-glorious";
import { MysteryJoyful } from "../../models/holy-rosary/mystery-joyful";
import { MysteryLuminous } from "../../models/holy-rosary/mystery-luminous";
import { MysterySorrowful } from "../../models/holy-rosary/mystery-sorrowful";

export enum RosaryMysteriesEnum {
  GLORIOUS,
  JOYFUL,
  LUMINOUS,
  SORROWFUL
}

export function lookupMystery(mysteryEnum: RosaryMysteriesEnum) {
  if (RosaryMysteriesEnum.GLORIOUS === mysteryEnum) {
    return new MysteryGlorious();
  }
  else if (RosaryMysteriesEnum.JOYFUL === mysteryEnum) {
    return new MysteryJoyful();
  }
  else if (RosaryMysteriesEnum.LUMINOUS === mysteryEnum) {
    return new MysteryLuminous();
  }
  else if (RosaryMysteriesEnum.SORROWFUL === mysteryEnum) {
    return new MysterySorrowful();
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
