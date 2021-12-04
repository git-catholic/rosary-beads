import { BeadGroupContainer } from "../sequences/contemporary-rosary";
import { BeadGroup } from "./bead-group";
import { fruitByNumber, Mysteries, mysteryByNumber } from "./mysteries";

export abstract class BeadGroupList {

  debugTheEnd = false;

  private currentBeadGroup: BeadGroup;

  // TODO: Mystery-related code should be moved to HolyRosaryPrayerComponent
  private activeMysteries: Mysteries;
  private activeMysteriesIdx: number;

  private beadGroups: BeadGroup[];
  private beadGroupIdx: number;

  private skipNext = false;
  private beadIdxOverrideOccurred = false;

  constructor(private beadContainer: BeadGroupContainer, 
              mysteries?: Mysteries) {
    this.currentBeadGroup = undefined;
    this.beadGroups = beadContainer.beadGroups;
    this.beadGroupIdx = -1;
    this.activeMysteries = mysteries;
    this.activeMysteriesIdx = 0;
  }

  abstract prayerName(): string;

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

  debugSetIndices(sequenceId: string): void {
    const redirectBeadInfo: BeadGroup = this.beadContainer.beadMap[sequenceId];
    if (redirectBeadInfo) {
      this.currentBeadGroup = redirectBeadInfo;
      this.activeMysteriesIdx = redirectBeadInfo.mysteryIdx;
      this.beadGroupIdx = redirectBeadInfo.beadGroupIndex;
      this.skipNext = true;
      this.beadIdxOverrideOccurred = true;
      console.log('debugTheEnd set to false');
      this.debugTheEnd = false;
    }
    else if (sequenceId === 'end') {
      console.log('debugTheEnd set to true');
      this.debugTheEnd = true;
    }
  }

  get isPrayerSequenceDone(): boolean {
    return this.beadGroupIdx >= this.beadGroups.length;
  }

  current(): BeadGroup {
    return this.currentBeadGroup;
  }

  next(): BeadGroup {
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

      if (this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx) {
        this.activeMysteriesIdx++;
      }
    }
    else {
      this.currentBeadGroup.next();
    }
    return this.currentBeadGroup;
  }

  previous(): BeadGroup {
    if (this.currentBeadGroup.index > 0) {
      this.currentBeadGroup.previous();
    }
    else if (this.beadGroupIdx > 0) {
      const lastWasMystery = this.currentBeadGroup.sequence.startsWith('mystery') || this.currentBeadGroup.incrementMysteryIdx;

      this.beadGroupIdx--;
      this.currentBeadGroup = this.beadGroups[this.beadGroupIdx];
      this.currentBeadGroup.resetBeadIndexToEnd();

      if (lastWasMystery) {
        this.activeMysteriesIdx--;
      }
    }

    return this.currentBeadGroup;
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
