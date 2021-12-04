import { BeadGroupTemplate } from "./bead-group-template";

export class BeadGroup implements BeadGroupTemplate {

  sequence: string;
  sequenceId: string;
  beadGroupIndex?: number;
  repeatCount?: number;
  prayerIds?: string[];
  phoneFeedback?: string;
  mysteryIdx?: number;
  incrementMysteryIdx?: boolean;
  anchorId?: string;

  private beadIndex?: number;

  constructor(data?: BeadGroupTemplate, 
              mysteryIdx?: number, 
              beadGroupIndex?: number,
              anchorId?: string) {

    if (data) {
      this.sequence = data.sequence;
      this.sequenceId = `${data.sequence}_${beadGroupIndex}`;
      this.beadGroupIndex = beadGroupIndex;
      this.repeatCount = (data.repeatCount) ? data.repeatCount : 0;
      this.prayerIds = data.prayerIds;
      this.phoneFeedback = (data?.phoneFeedback || 'short');
      this.mysteryIdx = mysteryIdx;
      this.incrementMysteryIdx = data?.incrementMysteryIdx;
      this.anchorId = anchorId;

      this.beadIndex = 0;
    }
  }

  isBeadGroupDone(): boolean {
    return this.beadIndex >= (this.repeatCount - 1);
  }

  resetBeadIndex() {
    this.beadIndex = 0;
  }

  resetBeadIndexToEnd() {
    this.beadIndex = this.repeatCount - 1;
  }

  next() {
    this.beadIndex++;
  }

  previous() {
    this.beadIndex--;
  }

  get groupIndex(): number {
    return this.beadGroupIndex;
  }

  get index(): number {
    return this.beadIndex;
  }

  get maxIndex(): number {
    return (this.repeatCount) ? this.repeatCount : 0;
  }

}
