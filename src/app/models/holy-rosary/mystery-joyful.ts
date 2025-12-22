import { Mysteries, Mystery } from '../../models/holy-rosary/mysteries';

export class MysteryJoyful1 extends Mystery {
  readonly name = `first-joyful`;
  readonly id = 'MysteryJoyful1';

  get mystery(): string {
    return `joyful-mystery-1`;
  }

  get fruit(): string {
    return `joyful-fruit-1`;
  }
}

export class MysteryJoyful2 extends Mystery {
  readonly name = `second-joyful`;
  readonly id = 'MysteryJoyful2';

  get mystery(): string {
    return `joyful-mystery-2`;
  }

  get fruit(): string {
    return `joyful-fruit-2`;
  }
}

export class MysteryJoyful3 extends Mystery {
  readonly name = `third-joyful`;
  readonly id = 'MysteryJoyful3';

  get mystery(): string {
    return `joyful-mystery-3`;
  }

  get fruit(): string {
    return `joyful-fruit-3`;
  }
}

export class MysteryJoyful4 extends Mystery {
  readonly name = `fourth-joyful`;
  readonly id = 'MysteryJoyful4';

  get mystery(): string {
    return `joyful-mystery-4`;
  }

  get fruit(): string {
    return `joyful-fruit-4`;
  }
}

export class MysteryJoyful5 extends Mystery {
  readonly name = `fifth-joyful`;
  readonly id = 'MysteryJoyful5';

  get mystery(): string {
    return `joyful-mystery-5`;
  }

  get fruit(): string {
    return `joyful-fruit-5`;
  }
}

export class MysteryJoyful extends Mysteries {

  constructor() {
    super([
      new MysteryJoyful1(),
      new MysteryJoyful2(),
      new MysteryJoyful3(),
      new MysteryJoyful4(),
      new MysteryJoyful5()
    ]);
  }

  get mysterySequenceName(): string {
    return `joyful`;
  }

}
