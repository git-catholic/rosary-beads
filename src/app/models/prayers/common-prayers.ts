import { GroupPrayerTemplate, LeaderResponseTemplate, Sequence, SequenceTemplate } from "../sequence";

export class PrayerApostlesCreed extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerApostlesCreed';

  readonly name = $localize`:@@creedName:Apostles' Creed`;

  readonly all = $localize`:@@creed:I believe in God the Father almighty
      Creator of Heaven and Earth;
      I believe in Jesus Christ, His only Son, Our Lord
      who was conceived by the Holy Spirit,
      born of the Virgin Mary,
      suffered under Pontius Pilate,
      was crucified, died and was buried;
      He decended into hell;
      the third day He rose again from the dead;
      He ascended into heaven,
      sits at the right hand of God the Father Almighty;
      from there He shall come to judge
         the living and the dead.
      I believe in the Holy Spirit;
      the Holy Catholic Church,
      the communion of saints;
      the forgiveness of sins;
      the resurrection of the body;
      and life everylasting.
      Amen.`;

}

/* ================================================================================ */

export class PrayerGlory extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerGlory';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = $localize`:@@gloryName:The Glory Be (The Doxology)`;

  readonly leader = $localize`:@@glory-leader:Glory be to the Father, and the Son,
      and the Holy Spirit.`;

  readonly response = $localize`:@@glory-response:As it was in the beginning, is now,
      and ever shall be, world without end.

      Amen.`;

}

/* ================================================================================ */

export class PrayerHailMary extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerHailMary';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = $localize`:@@hailMaryName:Hail Mary`;

  readonly leader = $localize`:@@hail-mary-leader:Hail Mary, full of grace,
      the Lord is with thee;
      blessed art thou amongst women,
      and blessed is the fruit of thy womb, Jesus.`;

  readonly response = $localize`:@@hail-mary-response:Holy Mary, Mother of God,
      pray for us sinners,
      now, and at the hour of our death.

      Amen.`;

}

/* ================================================================================ */

export class PrayerOurFather extends Sequence implements LeaderResponseTemplate {

  readonly id = 'PrayerOurFather';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = $localize`:@@ourFatherName:Our Father`;

  readonly leader = $localize`:@@our-father-leader:Our Father who art in heaven,
      hallowed be Thy name;
      Thy kingdom come;
      Thy will be done
      on earth as it is in heaven.`;

  readonly response = $localize`:@@our-father-response:Give us this day our daily bread;
      and forgive us our trespasses,
      as we forgive those who trespass against us;
      and lead us not into temptation;
      but deliver us from evil.

      Amen.`;

}

/* ================================================================================ */

export class PrayerSignOfTheCross extends Sequence implements GroupPrayerTemplate {

  readonly id = 'PrayerSignOfTheCross';

  // Reference: https://www.usccb.org/prayers/prayers-rosary
  readonly name = $localize`:@@signCrossName:The Sign of the Cross`;

  readonly all = $localize`:@@sign-cross:In the name of the Father,
      and of the Son,
      and of the Holy Spirit.

      Amen.`

}
