import { Mysteries, Mystery } from '../../models/holy-rosary/mysteries';
import { LocalizationService } from '../../services/localization.service';

export class MysteryLuminous1 extends Mystery {
  readonly name = `first-luminous`;
  readonly id = 'MysteryLuminous1';

  get mystery(): string {
    return `luminous-mystery-1`;
  }

  get fruit(): string {
    return `luminous-fruit-1`;
  }
}

export class MysteryLuminous2 extends Mystery {
  readonly name = `second-luminous`;
  readonly id = 'MysteryLuminous2';

  get mystery(): string {
    return `luminous-mystery-2`;
  }

  get fruit(): string {
    return `luminous-fruit-2`;
  }
}

export class MysteryLuminous3 extends Mystery {
  readonly name = `third-luminous`;
  readonly id = 'MysteryLuminous3';

  get mystery(): string {
    return `luminous-mystery-3`;
  }

  get fruit(): string {
    return `luminous-fruit-3`;
  }
}

export class MysteryLuminous4 extends Mystery {
  readonly name = `fourth-luminous`;
  readonly id = 'MysteryLuminous4';

  get mystery(): string {
    return `luminous-mystery-4`;
  }

  get fruit(): string {
    return `luminous-fruit-4`;
  }
}

export class MysteryLuminous5 extends Mystery {
  readonly name = `fifth-luminous`;
  readonly id = 'MysteryLuminous5';

  get mystery(): string {
    return `luminous-mystery-5`;
  }

  get fruit(): string {
    return `luminous-fruit-5`;
  }
}

export class MysteryLuminous extends Mysteries {

  constructor() {
    super([
      new MysteryLuminous1(),
      new MysteryLuminous2(),
      new MysteryLuminous3(),
      new MysteryLuminous4(),
      new MysteryLuminous5()
    ])
  }

  get mysterySequenceName(): string {
    return `luminous`;
  }

}
