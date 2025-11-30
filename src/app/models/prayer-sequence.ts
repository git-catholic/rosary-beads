import { sequenceToString } from "../utils/sequence-tostring";
import { Sequence, SequenceTemplate } from "./sequence";

export abstract class PrayerSequence implements SequenceTemplate {
  abstract id: string;
  abstract name: string;

  readonly maxTimes = 1;

  protected currentPrayer: Sequence;
  protected prayerIndex = 0;
  protected _sequenceIndex = 0;
  private _totalPrayers: number;

  private _sequence: Sequence[];

  constructor(sequence?: Sequence[]) {
    //this.sequence = this.init();
    if (sequence !== undefined) {
      this.resetSequence(sequence);
    }
  }

  getCurrentPrayer(): Sequence {
    return this.currentPrayer;
  }

  getPrayerIndex(): number {
    return this.prayerIndex;
  }

  resetSequence(sequence?: Sequence[]): void {
    if (this._sequence === undefined && sequence === undefined) {
      throw new Error('Unable to reset sequence as an initial sequence was not provided');
    }

    if (sequence !== undefined) {
      this._sequence = sequence;
    }

    let prayerCount = 0;
    this._sequence.forEach((prayer, index) => {
      prayerCount += ((!prayer?.maxTimes || prayer?.maxTimes <= 1) ? 1 : prayer.maxTimes)
    });
    this._totalPrayers = prayerCount;
    this.currentPrayer = this._sequence[this.sequenceIndex];
  }

  getCurrentSequenceId(): string {
    if (this.currentPrayer !== undefined) {
      console.log(`current: (json) ${JSON.stringify(this.currentPrayer)}`);
    }
    return this.currentPrayer?.id;
  }

  toString(): string {
    return sequenceToString(this);
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
    return this._totalPrayers;
  }

  get isPrayerSequenceDone(): boolean {
    return this.currentIndex >= this.totalPrayerCount;
  }

  hasNext(): boolean {
    return (this.currentPrayer !== undefined && this.currentPrayer.hasNext()) || this.sequenceIndex < this._sequence.length - 1;
  }

  hasPrevious(): boolean {
    return (this.currentPrayer.hasPrevious() || this.sequenceIndex > 0);
  }

  next(): Sequence {
    console.log(`abstract prayer seq: ${this.currentPrayer?.id} - ${this.currentPrayer?.hasNext()}`);
    if (this.currentPrayer?.hasNext()) {
      console.log(`this.currentPrayer?.hasNext()`);
      this.prayerIndex++;
      this.onNext(this.currentPrayer);
      return this.currentPrayer.next();
    }
    if (this.hasNext()) {
      console.log(`this.hasNext()`);
      this.prayerIndex++;
      this._sequenceIndex++;
      this.currentPrayer = this._sequence[this.sequenceIndex];
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
      this.currentPrayer = this._sequence[this.sequenceIndex];
      this.onPrevious(this.currentPrayer);
      return this.currentPrayer.end();
    }
    return undefined;
  }

  start(): Sequence {
    this.prayerIndex = 0;
    this._sequenceIndex = 0;
    this.currentPrayer = this._sequence[this.sequenceIndex];
    this.onStart();
    return this.currentPrayer;
  }

  end(): Sequence {
    this.prayerIndex = this._totalPrayers - 1;
    this._sequenceIndex = this._sequence.length - 1;
    this.currentPrayer = this._sequence[this.sequenceIndex];
    this.onEnd();
    return this.currentPrayer.end();
  }

  protected get sequence(): Sequence[] {
    return this._sequence;
  }

  protected get totalPrayers(): number {
    return this._totalPrayers;
  }

  protected abstract onNext(prayer?: Sequence): void;
  protected abstract onPrevious(prayer?: Sequence): void;
  protected abstract onStart(): void;
  protected abstract onEnd(): void;
}
