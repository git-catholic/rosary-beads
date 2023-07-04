import { LeaderResponseTemplate, GroupPrayerTemplate, Sequence } from "../sequence";

/* ================================================================================ */

export class PrayerClosing1 extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerClosing1';

  readonly name = $localize`:@@closingName1:Closing Prayer 1`;

  readonly leader = $localize`:@@closing-leader-1:Pray for us, O holy Mother of God.`;

  readonly response = $localize`:@@closing-response-1:That we may be made worthy of the promises of Christ.`;

}

/* ================================================================================ */

export class PrayerClosing2 extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerClosing2';

  readonly name = $localize`:@@closingName2:Closing Prayer 2`;

  readonly leader = $localize`:@@closing-leader-2:Let us pray:`;

  readonly response = $localize`:@@closing-response-2:O God, whose only begotten Son,
      by His life, death and resurrection,
      has purchased for us
      the rewards of eternal life,
      grant, we beseech Thee,
      that meditating on these mysteries
      of the Most Holy Rosary
      of the Blessed Virgin Mary,
      we may imitate what they contain,
      and obtain what they promise,
      through the same Christ, our Lord.

      Amen.`

}

/* ================================================================================ */

export class PrayerFatima extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerFatima';

  readonly name = $localize`:@@fatimaName:The Fatima Prayer`;

  readonly all = $localize`:@@fatima:Oh my Jesus, forgive us our sins,
      save us from the fires of hell;
      lead all souls to heaven,
      especially those in most need of your mercy!

      Amen.`;

}

/* ================================================================================ */

export class PrayerHailHolyQueen extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerHailHolyQueen';

  readonly all = $localize`:@@hail-holy-queen:Hail, Holy Queen, Mother of Mercy,
      our life, our sweetness, and our hope.
      To thee do we cry, poor banished children of Eve.
      To thee do we send up our sighs, mourning and weeping in this vale of tears.
      Turn then, most gracious advocate, thine eyes of mercy towards us,
      and after this our exile show unto us the blessed fruit of thy womb, Jesus.
      O clement, O loving, O sweet Virgin Mary.

      Amen`;

  readonly name = $localize`:@@hail-holy-queen-name:Hail, Holy Queen`;

}

