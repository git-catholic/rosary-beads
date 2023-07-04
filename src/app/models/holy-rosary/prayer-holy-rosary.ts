import { PrayerApostlesCreed, PrayerGlory, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from "../prayers/common-prayers";
import { Mysteries, MysteryPlaceholder } from "./mysteries";
import { PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerHailHolyQueen } from "../prayers/rosary-prayers";
import { PrayerSequence } from "../prayer-sequence";
import { Sequence } from "../sequence";
import { RosaryBeads } from "src/app/rosary-beads/rosary-beads";

export class PrayerHolyRosary extends PrayerSequence {

  readonly id = 'PrayerHolyRosary';

  readonly name = $localize`:@@prayerHolyRosary:The Holy Rosary`;

  private mysteryPlaceholder = new MysteryPlaceholder();

  constructor(private mysteries: Mysteries, private beads?: RosaryBeads) {
    super();
    this.updateMysteryPlaceholders();
  }

  protected init(): Sequence[] {
    this.mysteryPlaceholder = new MysteryPlaceholder();
    return [
      new PrayerSignOfTheCross(),
      new PrayerApostlesCreed(),
      new PrayerOurFather(),
      new PrayerHailMary(3),
      new PrayerGlory(),
      // #1
      this.mysteryPlaceholder,
      new PrayerOurFather(),
      new PrayerHailMary(10),
      new PrayerGlory(),
      new PrayerFatima(),
      // #2
      this.mysteryPlaceholder,
      new PrayerOurFather(),
      new PrayerHailMary(10),
      new PrayerGlory(),
      new PrayerFatima(),
      // #3
      this.mysteryPlaceholder,
      new PrayerOurFather(),
      new PrayerHailMary(10),
      new PrayerGlory(),
      new PrayerFatima(),
      // #4
      this.mysteryPlaceholder,
      new PrayerOurFather(),
      new PrayerHailMary(10),
      new PrayerGlory(),
      new PrayerFatima(),
      // #5
      this.mysteryPlaceholder,
      new PrayerOurFather(),
      new PrayerHailMary(10),
      new PrayerGlory(),
      new PrayerFatima(),
      // Closing
      new PrayerHailHolyQueen(),
      new PrayerClosing1(),
      new PrayerClosing2(),
      new PrayerSignOfTheCross()
    ];
  };

  protected onNext(prayer?: Sequence): void {
    if (this.beads !== undefined) {
      this.beads.next(prayer);
    }
  }

  protected onPrevious(prayer?: Sequence): void {
    if (this.beads !== undefined) {
      this.beads.previous(prayer);
    }
  }

  protected onStart(): void {
    if (this.beads !== undefined) {
      this.beads.start();
    }
  }

  protected onEnd(): void {
    if (this.beads !== undefined) {
      this.beads.end();
    }
  }

  private updateMysteryPlaceholders() {
    let mysteryIndex = 1;
    for (let idx = 0; idx < this.sequence.length; idx++) {
      if (this.sequence[idx]?.id === this.mysteryPlaceholder?.id) {
        this.sequence[idx] = this.mysteries.mystery(mysteryIndex);
        mysteryIndex++;
      }
    }
  }
};
