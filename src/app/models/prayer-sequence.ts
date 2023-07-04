import { Sequence, SequenceTemplate } from "./sequence";

export abstract class PrayerSequence implements SequenceTemplate {
  abstract id: string;
  abstract name: string;

  readonly maxTimes = 1;

  protected currentPrayer: Sequence;
  protected prayerIndex = 0;
  protected _sequenceIndex = 0;
  protected readonly totalPrayers: number;

  protected readonly sequence: Sequence[];

  constructor() {
    this.sequence = this.init();
    let prayerCount = 0;
    this.sequence.forEach((prayer, index) => {
      prayerCount += ((!prayer?.maxTimes || prayer?.maxTimes <= 1) ? 1 : prayer.maxTimes)
    });
    this.totalPrayers = prayerCount;
    this.currentPrayer = this.sequence[this.sequenceIndex];
  }

  get currentIndex(): number {
    return this.prayerIndex;
  }

  get currentSequence(): Sequence {
    return this.currentPrayer;
  }

  get sequenceIndex(): number {
    return this._sequenceIndex;
  }

  get totalPrayerCount(): number {
    return this.totalPrayers;
  }

  hasNext(): boolean {
    return (this.currentPrayer !== undefined && this.currentPrayer.hasNext()) || this.sequenceIndex < this.sequence.length - 1;
  }

  hasPrevious(): boolean {
    return (this.currentPrayer.hasPrevious() || this.sequenceIndex > 0);
  }

  next(): Sequence {
    if (this.currentPrayer?.hasNext()) {
      this.prayerIndex++;
      this.onNext(this.currentPrayer);
      return this.currentPrayer.next();
    }
    if (this.hasNext()) {
      this.prayerIndex++;
      this._sequenceIndex++;
      this.currentPrayer = this.sequence[this.sequenceIndex];
      if (this.currentPrayer !== undefined) {
        this.onNext(this.currentPrayer);
        return this.currentPrayer?.start();
      }
    }
    return undefined;
  }

  previous(): Sequence {
    if (this.currentPrayer.hasPrevious()) {
      this.prayerIndex--;
      this.onPrevious(this.currentPrayer);
      return this.currentPrayer.previous();
    }
    if (this.hasPrevious()) {
      this.prayerIndex--;
      this._sequenceIndex--;
      this.currentPrayer = this.sequence[this.sequenceIndex];
      this.onPrevious(this.currentPrayer);
      return this.currentPrayer.end();
    }
    return undefined;
  }

  start(): Sequence {
    this.prayerIndex = 0;
    this._sequenceIndex = 0;
    this.currentPrayer = this.sequence[this.sequenceIndex];
    this.onStart();
    return this.currentPrayer;
  }

  end(): Sequence {
    this.prayerIndex = this.totalPrayers - 1;
    this._sequenceIndex = this.sequence.length - 1;
    this.currentPrayer = this.sequence[this.sequenceIndex];
    this.onEnd();
    return this.currentPrayer.end();
  }

  protected abstract init(): Sequence[];
  protected abstract onNext(prayer?: Sequence): void;
  protected abstract onPrevious(prayer?: Sequence): void;
  protected abstract onStart(): void;
  protected abstract onEnd(): void;
}
