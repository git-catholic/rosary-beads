import { BeadGroup } from "./bead-group";
import { BeadGroupContainer } from "./bead-group-container";

export abstract class BeadGroupList {

  protected currentBeadGroup: BeadGroup;

  protected beadGroups: BeadGroup[];
  protected beadGroupIdx: number;

  protected skipNext = false;
  protected beadIdxOverrideOccurred = false;

  constructor(protected beadContainer: BeadGroupContainer) {
    this.currentBeadGroup = undefined;
    this.beadGroups = this.beadContainer.beadGroups;
    this.beadGroupIdx = -1;
  }

  abstract prayerName(): string;

  protected abstract onNextStart(): void;
  protected abstract onNextBeadGroupDone(): void;
  protected abstract onNextBeadGroupContinued(): void;
  protected abstract onNextEnd(): void;

  protected abstract onPreviousStart(): void;
  protected abstract onPreviousBead(): void;
  protected abstract onPreviousBeadGroup(): void;
  protected abstract onPreviousEnd(): void;

  debugHasBeadIdxOverrideOccurred(resetOverrideFlag = true): boolean {
    const result = this.beadIdxOverrideOccurred;
    if (resetOverrideFlag) {
      this.beadIdxOverrideOccurred = false;
    }
    return result;
  }

  debugWriteSequenceIds(): void {
    if (this.beadGroups) {
      this.beadGroups.forEach(beadGroup => console.log(`seqId: ${beadGroup.sequenceId}, mysteryIdx: ${beadGroup.mysteryIdx}, beadIdx: ${beadGroup.beadGroupIndex}`));
    }
  }

  get isPrayerSequenceDone(): boolean {
    return this.beadGroupIdx >= this.beadGroups.length;
  }

  current(): BeadGroup {
    return this.currentBeadGroup;
  }

  next(): BeadGroup {
    this.onNextStart();

    if (this.skipNext) {
      this.skipNext = false;
      return this.currentBeadGroup;
    }

    if (this.isCurrentBeadGroupDone()) {
      this.beadGroupIdx++;
      if (this.beadGroupIdx >= this.beadGroups.length) {
        return undefined;
      }

      this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
      this.currentBeadGroup.resetBeadIndex();

      this.onNextBeadGroupDone();
    }
    else {
      this.currentBeadGroup.next();
      this.onNextBeadGroupContinued();
    }

    this.onNextEnd();
    return this.currentBeadGroup;
  }

  previous(): BeadGroup {
    this.onPreviousStart();

    if (this.currentBeadGroup.index > 0) {
      this.currentBeadGroup.previous();
      this.onPreviousBead();
    }
    else if (this.beadGroupIdx > 0) {
      this.beadGroupIdx--;
      this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
      this.currentBeadGroup.resetBeadIndexToEnd();

      this.onPreviousBeadGroup();
    }

    this.onPreviousEnd();
    return this.currentBeadGroup;
  }

  toConsole() {
    console.log('------- Bead group - start -------');
    this.beadGroups.forEach(entry => {
      console.log(`${JSON.stringify(entry)}`);
    })
    console.log('-------- Bead group - end --------');
  }

  private isCurrentBeadGroupDone() {
    return this.currentBeadGroup === undefined || this.currentBeadGroup === null
      || this.beadGroupIdx < 0 || this.currentBeadGroup.isBeadGroupDone();
  }

}
