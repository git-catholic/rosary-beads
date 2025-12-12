import { PrayerApostlesCreed, PrayerEnd, PrayerGlory, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from "../prayers/common-prayers";
import { Mysteries, MysteryPlaceholder } from "./mysteries";
import { PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerHailHolyQueen } from "../prayers/rosary-prayers";
import { PrayerSequence } from "../prayer-sequence";
import { Sequence } from "../sequence";
import { RosaryBeads } from "../../rosary-beads/rosary-beads";
import { LocalizationService } from "../../services/localization.service";

export class PrayerHolyRosary extends PrayerSequence {

  readonly id = 'PrayerHolyRosary';

  private mysteryPlaceholder = new MysteryPlaceholder();

  constructor(private localizationService: LocalizationService,
              private mysteries: Mysteries,
              private beads?: RosaryBeads) {
    super();
    console.log(`Beads passed in? ${beads}`);
    this.resetSequence(this.init());
    this.updateMysteryPlaceholders();
  }

  get name(): string {
    return this.localizationService?.prayerHolyRosary;
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
      new PrayerSignOfTheCross(),
      new PrayerEnd()
    ];
  };

  protected onNext(prayer?: Sequence): void {
    console.log(`rosary - has beads? ${this.beads} - bead id: ${this.beads?.id}`);
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
    let prayerSequence = this.getPrayerSequence();
    for (let idx = 0; idx < prayerSequence?.length; idx++) {
      if (prayerSequence[idx]?.id === this.mysteryPlaceholder?.id) {
        prayerSequence[idx] = this.mysteries.mystery(mysteryIndex);
        mysteryIndex++;
      }
    }
  }
};
