import { BeadGroup } from "./bead-group";

export interface BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];
  phoneFeedback?: string;
  incrementMysteryIdx?: boolean;
  anchorId?: string;
}

export enum BeadLinkOffset {
  BEAD_IDX_MINUS_1,
  BEAD_IDX_MINUS_2
}

export function initBasicBeadGroup(beadMap: Map<string, BeadGroup>,
                                   template: BeadGroupTemplate,
                                   beadGroupIndex: number,
                                   anchorId?: string): BeadGroup {
  return initMysteryBeadGroup(beadMap, template, undefined, beadGroupIndex, anchorId);
}

export function initMysteryBeadGroup(beadMap: Map<string, BeadGroup>,
                              template: BeadGroupTemplate, 
                              mysteryIdx: number, 
                              beadGroupIndex: number,
                              anchorId?: string): BeadGroup {
  const beadGroup = new BeadGroup(template, mysteryIdx, beadGroupIndex);
  if (anchorId) {
    beadGroup.anchorId = anchorId;
  }
  beadMap[beadGroup.sequenceId] = beadGroup;
  return beadGroup;
}
