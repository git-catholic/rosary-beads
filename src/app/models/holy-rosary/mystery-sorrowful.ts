import { Mysteries, Mystery } from 'src/app/models/holy-rosary/mysteries';
import { LocalizationService } from 'src/app/services/localization.service';

export class MysterySorrowful1 extends Mystery {
  name: string;
  readonly id = 'MysterySorrowful1';

  get mystery(): string {
    return $localize`:@@sorrowful-mystery-1:The Agony in the Garden`;
  }

  get fruit(): string {
    return $localize`:@@sorrowful-fruit-1:Contrition for our sins`;
  }
}

export class MysterySorrowful2 extends Mystery {
  name: string;
  readonly id = 'MysterySorrowful2';

  get mystery(): string {
    return $localize`:@@sorrowful-mystery-2:The Scourging at the Pillar`;
  }

  get fruit(): string {
    return $localize`:@@sorrowful-fruit-2:Mortification of our senses`;
  }
}

export class MysterySorrowful3 extends Mystery {
  name: string;
  readonly id = 'MysterySorrowful3';

  get mystery(): string {
    return $localize`:@@sorrowful-mystery-3:The Crowning of Thorns`;
  }

  get fruit(): string {
    return $localize`:@@sorrowful-fruit-3:Interior mortification`;
  }
}

export class MysterySorrowful4 extends Mystery {
  name: string;
  readonly id = 'MysterySorrowful4';

  get mystery(): string {
    return $localize`:@@sorrowful-mystery-4:The Carrying of the Cross`;
  }

  get fruit(): string {
    return $localize`:@@sorrowful-fruit-4:Patience under crosses`;
  }
}

export class MysterySorrowful5 extends Mystery {
  name: string;
  readonly id = 'MysterySorrowful5';

  get mystery(): string {
    return $localize`:@@sorrowful-mystery-5:The Crucifixion and Death of our Lord`;
  }

  get fruit(): string {
    return $localize`:@@sorrowful-fruit-5:That we may die to ourselves`;
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
    return $localize`:@@sorrowful:Sorrowful`;
  }

}
