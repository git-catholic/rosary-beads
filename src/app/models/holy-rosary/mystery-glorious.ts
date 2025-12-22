import { Mysteries, Mystery } from '../../models/holy-rosary/mysteries';

export class MysteryGlorious1 extends Mystery {
  readonly name = 'first-glorious';
  readonly id = 'MysteryGlorious1';

  readonly mystery = 'glorious-mystery-1';

  readonly fruit = 'glorious-fruit-1';
}

export class MysteryGlorious2 extends Mystery {
  readonly name = 'second-glorious';
  readonly id = 'MysteryGlorious2';

  readonly mystery = 'glorious-mystery-2';

  readonly fruit = 'glorious-fruit-2';
}

export class MysteryGlorious3 extends Mystery {
  readonly name = 'third-glorious';
  readonly id = 'MysteryGlorious3';

  readonly mystery = 'glorious-mystery-3';

  readonly fruit = 'glorious-fruit-3';
}

export class MysteryGlorious4 extends Mystery {
  readonly name = 'fourth-glorious';
  readonly id = 'MysteryGlorious4';

  readonly mystery = 'glorious-mystery-4';

  readonly fruit = 'glorious-fruit-4';
}

export class MysteryGlorious5 extends Mystery {
  readonly name = 'fifth-glorious';
  readonly id = 'MysteryGlorious5';

  readonly mystery = 'glorious-mystery-5';

  readonly fruit = 'glorious-fruit-5';
}

export class MysteryGlorious extends Mysteries {

  constructor() {
    super([
      new MysteryGlorious1(),
      new MysteryGlorious2(),
      new MysteryGlorious3(),
      new MysteryGlorious4(),
      new MysteryGlorious5()
    ]);
  }

  get mysterySequenceName(): string {
    return 'glorious';
  }

}
