import { BeadGroupTemplate } from "../models/bead-group-template";

export const DM_SIGN_CROSS: BeadGroupTemplate = {
  sequence: 'sign-cross',
  sequenceId: 'sign-cross',
  prayerIds: [
    '@@sign-cross'
  ]
}

export const DM_OPTIONAL_OPENING: BeadGroupTemplate = {
  sequence: 'optional-opening',
  sequenceId: 'optional-opening'
}

export const DM_BLOOD_AND_WATER: BeadGroupTemplate = {
  sequence: 'blood-and-water',
  sequenceId: 'blood-and-water',
  repeatCount: 3,
  prayerIds: [
    '@@divineMercyBloodAndWater'
  ]
}

export const DM_OUR_FATHER: BeadGroupTemplate = {
  sequence: 'our-father',
  sequenceId: 'our-father',
  prayerIds: [
    '@@our-father'
  ]
}

export const DM_HAIL_MARY: BeadGroupTemplate = {
  sequence: 'hail-mary',
  sequenceId: 'hail-mary',
  prayerIds: [
    '@@hail-mary'
  ]
};

export const DM_APOSTLES_CREED: BeadGroupTemplate = {
  sequence: 'creed',
  sequenceId: 'creed',
  prayerIds: [
    '@@creed'
  ]
};

export const DM_ETERNAL_FATHER: BeadGroupTemplate = {
  sequence: 'eternal-father',
  sequenceId: 'eternal-father',
  prayerIds: [
    '@@divineMercyEternalFather'
  ]
};

export const DM_HAVE_MERCY_ON_US: BeadGroupTemplate = {
  sequence: 'have-mercy-on-us',
  sequenceId: 'have-mercy-on-us',
  repeatCount: 10,
  prayerIds: [
    '@@divineMercyHaveMercyOnUs'
  ]
}

export const DM_HOLY_MIGHTY_ONE: BeadGroupTemplate = {
  sequence: 'holy-mighty-one',
  sequenceId: 'holy-mighty-one',
  repeatCount: 3,
  prayerIds: [
    '@@divineMercyHolyMightyOne'
  ]
}

export const DM_OPTIONAL_CLOSING: BeadGroupTemplate = {
  sequence: 'optional-closing',
  sequenceId: 'optional-closing',
  prayerIds: [
    '@@divineMercyOptionalClosing'
  ]
}