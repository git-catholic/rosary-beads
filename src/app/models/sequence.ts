export interface SequenceTemplate {
  id: string;
  name?: string;
  maxTimes?: number;
}

export interface LeaderResponseTemplate extends SequenceTemplate {
  leader: string;
  response: string;
}

export interface GroupPrayerTemplate extends SequenceTemplate {
  all: string;
}

export interface NavigateSequence {
  currentIndex: number;
  sequenceIndex: number;
  hasNext(): boolean;
  hasPrevious(): boolean;
  next(prayer?: Sequence): Sequence;
  previous(prayer?: Sequence): Sequence;
  start(): Sequence;
  end(): Sequence;
}

export abstract class Sequence implements NavigateSequence, SequenceTemplate {
  abstract id: string;
  abstract name?: string;

  private _maxTimes: number;

  protected index: number = 0;

  constructor(maxTimes = 1) {
    this._maxTimes = maxTimes;
  }

  get currentIndex(): number {
    return this.index;
  }

  get sequenceIndex(): number {
    // NOTE: Default implementation. In some cases, may need reference something other than "index".
    return this.index;
  }

  get maxTimes(): number {
    return this._maxTimes;
  }

  set maxTimes(value: number) {
    this._maxTimes = (value !== undefined && value >= 1)
      ? value
      : 1;
  }

  hasNext(): boolean {
    return this.index < this.maxTimes - 1;
  }

  hasPrevious(): boolean {
    return this.index > 0;
  }

  next(): Sequence {
    this.index++;
    return (this.index < this.maxTimes)
      ? this
      : undefined;
  }

  previous(): Sequence {
    this.index--;
    return (this.index >= 0)
      ? this
      : undefined;
  }

  start(): Sequence {
    this.index = 0;
    return this;
  }

  end(): Sequence {
    this.index = this.maxTimes - 1;
    return this;
  }

}

