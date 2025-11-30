import { Sequence, SequenceTemplate } from "../sequence";

export abstract class Mystery extends Sequence implements SequenceTemplate {
  abstract override name: string;
  abstract override id: string;
  abstract mystery: string;
  abstract fruit: string;

  override get sequenceIndex(): number {
    return this.currentIndex;
  }
}

export class MysteryPlaceholder extends Mystery {
  readonly name: string = 'MysteryPlaceholder';
  readonly id = 'MysteryPlaceholder';
  readonly mystery = 'MysteryPlaceholder';
  readonly fruit = 'MysteryPlaceholder';
}

export abstract class Mysteries {

  abstract mysterySequenceName: string;

  constructor(protected mysteries: Mystery[]) { }

  mystery(index: number): Mystery {
    return (index >= 1 && index <= this.mysteries.length)
      ? this.mysteries[index - 1]
      : undefined;
  }

  get mysteryCount(): number {
    console.log(`mysteryCount: ${JSON.stringify(this.mysteries)}`);
    return (this.mysteries !== undefined)
      ? this?.mysteries?.length || 0
      : 0;
  }

}

