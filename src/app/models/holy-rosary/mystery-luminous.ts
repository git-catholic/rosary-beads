import { Mysteries, Mystery } from '../../models/holy-rosary/mysteries';
import { LocalizationService } from '../../services/localization.service';

export class MysteryLuminous1 extends Mystery {
  readonly name = $localize`:@@first-luminous:First Luminous Mystery`;
  readonly id = 'MysteryLuminous1';

  get mystery(): string {
    return $localize`:@@luminous-mystery-1:The Baptism in the Jordan`;
  }

  get fruit(): string {
    return $localize`:@@luminous-fruit-1:Openness to the Holy Spirit`;
  }
}

export class MysteryLuminous2 extends Mystery {
  readonly name = $localize`:@@second-luminous:Second Luminous Mystery`;
  readonly id = 'MysteryLuminous2';

  get mystery(): string {
    return $localize`:@@luminous-mystery-2:The Wedding Feast at Cana`;
  }

  get fruit(): string {
    return $localize`:@@luminous-fruit-2:To Jesus through Mary`;
  }
}

export class MysteryLuminous3 extends Mystery {
  readonly name = $localize`:@@third-luminous:Third Luminous Mystery`;
  readonly id = 'MysteryLuminous3';

  get mystery(): string {
    return $localize`:@@luminous-mystery-3:The Proclamation of the Kingdom of God`;
  }

  get fruit(): string {
    return $localize`:@@luminous-fruit-3:Conversion`;
  }
}

export class MysteryLuminous4 extends Mystery {
  readonly name = $localize`:@@fourth-luminous:Fourth Luminous Mystery`;
  readonly id = 'MysteryLuminous4';

  get mystery(): string {
    return $localize`:@@luminous-mystery-4:The Transfiguration`;
  }

  get fruit(): string {
    return $localize`:@@luminous-fruit-4:Desire for holiness`;
  }
}

export class MysteryLuminous5 extends Mystery {
  readonly name = $localize`:@@fifth-luminous:Fifth Luminous Mystery`;
  readonly id = 'MysteryLuminous5';

  get mystery(): string {
    return $localize`:@@luminous-mystery-5:The Instituation of the Eucharist`;
  }

  get fruit(): string {
    return $localize`:@@luminous-fruit-5:Adoration`;
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
    return $localize`:@@luminous:Luminous`;;
  }

}
