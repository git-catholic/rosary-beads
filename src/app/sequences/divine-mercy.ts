import { BeadGroup } from "../models/bead-group";
import { BeadGroupContainer } from "../models/bead-group-container";
import { BeadGroupList } from "../models/bead-group-list";
import { initBasicBeadGroup } from "../models/bead-group-template";
import { LocalizationService } from "../services/localization.service";
import { DM_APOSTLES_CREED, DM_ETERNAL_FATHER, DM_HAIL_MARY, DM_HAVE_MERCY_ON_US, DM_HOLY_MIGHTY_ONE, DM_OPTIONAL_CLOSING, DM_OPTIONAL_OPENING, DM_OUR_FATHER, DM_SIGN_CROSS } from "./divine-mercy-helper";
import { SIGN_CROSS } from "./rosary-helper";

export class DivineMercy extends BeadGroupList {
  
  constructor(private localizationUtil: LocalizationService) {
    super(loadDivineMercyChaplet());
  }

  prayerName(): string {
    return this.localizationUtil.prayerDivineMercy;
  }
  
  protected onNextStart(): void {
    // No action needed.
  }

  protected onNextBeadGroupDone(): void {
    // No action needed.
  }

  protected onNextBeadGroupContinued(): void {
    // No action needed.
  }

  protected onNextEnd(): void {
    // No action needed.
  }

  protected onPreviousStart(): void {
    // No action needed.
  }

  protected onPreviousBead(): void {
    // No action needed.
  }

  protected onPreviousBeadGroup(): void {
    // No action needed.
  }

  protected onPreviousEnd(): void {
    // No action needed.
  }

}

function loadDivineMercyChaplet(): BeadGroupContainer {
  let beadGroupIndex = 0;
  const beadMap = new Map<string, BeadGroup>();

  const beadGroups = [
    initBasicBeadGroup(beadMap, DM_SIGN_CROSS, beadGroupIndex++),
    
    initBasicBeadGroup(beadMap, DM_OPTIONAL_OPENING, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_OUR_FATHER, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_HAIL_MARY, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_APOSTLES_CREED, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_ETERNAL_FATHER, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_HAVE_MERCY_ON_US, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_ETERNAL_FATHER, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_HAVE_MERCY_ON_US, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_ETERNAL_FATHER, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_HAVE_MERCY_ON_US, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_ETERNAL_FATHER, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_HAVE_MERCY_ON_US, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_ETERNAL_FATHER, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_HAVE_MERCY_ON_US, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_HOLY_MIGHTY_ONE, beadGroupIndex++),
    initBasicBeadGroup(beadMap, DM_OPTIONAL_CLOSING, beadGroupIndex++),

    initBasicBeadGroup(beadMap, DM_SIGN_CROSS, beadGroupIndex++)
  ];

  return {
    beadGroups,
    beadMap
  };
}