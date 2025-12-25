import { GroupPrayerTemplate, LeaderResponseTemplate, Sequence, SequenceTemplate } from "../sequence";

export class PrayerApostlesCreed extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerApostlesCreed';

  readonly name = 'creedName';

  readonly all = 'creed';

}

/* ================================================================================ */

export class PrayerFatima extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerFatima';

  readonly name = 'fatimaName';

  readonly all = 'fatima';

}

/* ================================================================================ */

export class PrayerGlory extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerGlory';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = 'gloryName';

  readonly leader = 'glory-leader';

  readonly response = 'glory-response';

}

/* ================================================================================ */

export class PrayerGloryFatima extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerGloryFatima';

  private gloryPrayer = new PrayerGlory();
  private fatimaPrayer = new PrayerFatima();

  constructor() {
    super();
  }

  get name(): string {
    return `${this.gloryPrayer.name} / ${this.fatimaPrayer.name}`;
  }

  get leader(): string {
    return this.gloryPrayer.leader;
  }

  get response(): string {
    return `${this.gloryPrayer.response}

      ${this.fatimaPrayer.all}`;
  }

}

/* ================================================================================ */

export class PrayerHailMary extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerHailMary';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = 'hailMaryName';

  readonly leader = 'hail-mary-leader';

  readonly response = 'hail-mary-response';

}

/* ================================================================================ */

export class PrayerOurFather extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerOurFather';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = 'ourFatherName';

  readonly leader = 'our-father-leader';

  readonly response = 'our-father-response';

}

/* ================================================================================ */

export class PrayerSignOfTheCross extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerSignOfTheCross';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = 'signCrossName';

  readonly all = 'sign-cross';

}

/* ================================================================================ */

export class PrayerEnd extends Sequence {
  override id = 'PrayerEnd';
  override name = 'the-end';  
}