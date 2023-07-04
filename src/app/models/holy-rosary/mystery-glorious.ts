import { Mysteries, Mystery } from 'src/app/models/holy-rosary/mysteries';

export class MysteryGlorious1 extends Mystery {
  readonly name = $localize`:@@first-glorious:First Glorious Mystery`;
  readonly id = 'MysteryGlorious1';

  get mystery(): string {
    return $localize`:@@glorious-mystery-1:The Resurrection`;
  }

  get fruit(): string {
    return $localize`:@@glorious-fruit-1:A conversion of heart`;
  }
}

export class MysteryGlorious2 extends Mystery {
  readonly name = $localize`:@@second-glorious:Second Glorious Mystery`;
  readonly id = 'MysteryGlorious2';

  get mystery(): string {
    return $localize`:@@glorious-mystery-2:The Ascension`;
  }

  get fruit(): string {
    return $localize`:@@glorious-fruit-2:A desire for heaven`;
  }
}

export class MysteryGlorious3 extends Mystery {
  readonly name = $localize`:@@third-glorious:Third Glorious Mystery`;
  readonly id = 'MysteryGlorious3';

  get mystery(): string {
    return $localize`:@@glorious-mystery-3:The Coming of the Holy Spirit`;
  }

  get fruit(): string {
    return $localize`:@@glorious-fruit-3:The gifts of the Holy Spirit`;
  }
}

export class MysteryGlorious4 extends Mystery {
  readonly name = $localize`:@@fourth-glorious:Fourth Glorious Mystery`;
  readonly id = 'MysteryGlorious4';

  get mystery(): string {
    return $localize`:@@glorious-mystery-4:The Assumption of the Blessed Mother`;
  }

  get fruit(): string {
    return $localize`:@@glorious-fruit-4:Devotion to Mary`;
  }
}

export class MysteryGlorious5 extends Mystery {
  readonly name = $localize`:@@fifth-glorious:Fifth Glorious Mystery`;
  readonly id = 'MysteryGlorious5';

  get mystery(): string {
    return $localize`:@@glorious-mystery-5:The Coronation of the Blessed Mother`;
  }

  get fruit(): string {
    return $localize`:@@glorious-fruit-5:Eternal happiness`;
  }
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
    return $localize`:@@glorious:Glorious`;
  }

}
