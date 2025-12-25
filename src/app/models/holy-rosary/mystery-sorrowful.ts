import { Mysteries, Mystery } from '../../models/holy-rosary/mysteries';

export class MysterySorrowful1 extends Mystery {
  readonly name = `first-sorrowful`;
  readonly id = 'MysterySorrowful1';

  get mystery(): string {
    return `sorrowful-mystery-1`;
  }

  get fruit(): string {
    return `sorrowful-fruit-1`;
  }
}

export class MysterySorrowful2 extends Mystery {
  readonly name = `second-sorrowful`;
  readonly id = 'MysterySorrowful2';

  get mystery(): string {
    return `sorrowful-mystery-2`;
  }

  get fruit(): string {
    return `sorrowful-fruit-2`;
  }
}

export class MysterySorrowful3 extends Mystery {
  readonly name = `third-sorrowful`;
  readonly id = 'MysterySorrowful3';

  get mystery(): string {
    return `sorrowful-mystery-3`;
  }

  get fruit(): string {
    return `sorrowful-fruit-3`;
  }
}

export class MysterySorrowful4 extends Mystery {
  readonly name = `fourth-sorrowful`;
  readonly id = 'MysterySorrowful4';

  get mystery(): string {
    return `sorrowful-mystery-4`;
  }

  get fruit(): string {
    return `sorrowful-fruit-4`;
  }
}

export class MysterySorrowful5 extends Mystery {
  readonly name = `fifth-sorrowful`;
  readonly id = 'MysterySorrowful5';

  get mystery(): string {
    return `sorrowful-mystery-5`;
  }

  get fruit(): string {
    return `sorrowful-fruit-5`;
  }
}

export class MysterySorrowful extends Mysteries {

  constructor() {
    super([
      new MysterySorrowful1(),
      new MysterySorrowful2(),
      new MysterySorrowful3(),
      new MysterySorrowful4(),
      new MysterySorrowful5()
    ]);
  }

  get mysterySequenceName(): string {
    return `sorrowful`;
  }

}
