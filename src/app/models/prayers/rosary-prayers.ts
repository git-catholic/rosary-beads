import { LeaderResponseTemplate, GroupPrayerTemplate, Sequence } from "../sequence";

/* ================================================================================ */

export class PrayerClosing1 extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerClosing1';

  readonly name = `closingName1`;

  readonly leader = `closing-leader-1`;

  readonly response = `closing-response-1`;

}

/* ================================================================================ */

export class PrayerClosing2 extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerClosing2';

  readonly name = `closingName2`;

  readonly leader = `closing-leader-2`;

  readonly response = `closing-response-2`

}

/* ================================================================================ */

export class PrayerFatima extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerFatima';

  readonly name = `fatimaName`;

  readonly all = `fatima`;

}

/* ================================================================================ */

export class PrayerHailHolyQueen extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerHailHolyQueen';

  readonly all = `hail-holy-queen`;

  readonly name = `hail-holy-queen-name`;

}

