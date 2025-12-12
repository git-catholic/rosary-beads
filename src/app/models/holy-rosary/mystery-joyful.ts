import { Mysteries, Mystery } from '../../models/holy-rosary/mysteries';

export class MysteryJoyful1 extends Mystery {
  readonly name = $localize`:@@first-joyful:First Joyful Mystery`;
  readonly id = 'MysteryJoyful1';

  get mystery(): string {
    return $localize`:@@joyful-mystery-1:The Annunciation`;
  }

  get fruit(): string {
    return $localize`:@@joyful-fruit-1:Humility`;
  }
}

export class MysteryJoyful2 extends Mystery {
  readonly name = $localize`:@@second-joyful:Second Joyful Mystery`;
  readonly id = 'MysteryJoyful2';

  get mystery(): string {
    return $localize`:@@joyful-mystery-2:The Visitation`;
  }

  get fruit(): string {
    return $localize`:@@joyful-fruit-2:Charity`;
  }
}

export class MysteryJoyful3 extends Mystery {
  readonly name = $localize`:@@third-joyful:Third Joyful Mystery`;
  readonly id = 'MysteryJoyful3';

  get mystery(): string {
    return $localize`:@@joyful-mystery-3:Birth of our Lord`;
  }

  get fruit(): string {
    return $localize`:@@joyful-fruit-3:Poverty; detachment from the world`;
  }
}

export class MysteryJoyful4 extends Mystery {
  readonly name = $localize`:@@fourth-joyful:Fourth Joyful Mystery`;
  readonly id = 'MysteryJoyful4';

  get mystery(): string {
    return $localize`:@@joyful-mystery-4:The Presentation`;
  }

  get fruit(): string {
    return $localize`:@@joyful-fruit-4:Obedience`;
  }
}

export class MysteryJoyful5 extends Mystery {
  readonly name = $localize`:@@fifth-joyful:Fifth Joyful Mystery`;
  readonly id = 'MysteryJoyful5';

  get mystery(): string {
    return $localize`:@@joyful-mystery-5:The Finding of our Lord in the temple`;
  }

  get fruit(): string {
    return $localize`:@@joyful-fruit-5:Piety`;
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
    return $localize`:@@joyful:Joyful`;
  }

}
