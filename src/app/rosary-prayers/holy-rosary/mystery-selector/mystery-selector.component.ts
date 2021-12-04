import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { AppConfigService } from 'src/app/services/app-config.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { MysteryGlorious } from '../mysteries/mystery-glorious';

const SUN = 0;
const MON = 1;
const TUE = 2;
const WED = 3;
const THU = 4;
const FRI = 5;
const SAT = 6;

export const MYSTERY_LABEL_MAP = new Map<RosaryMysteriesEnum, string>();

const HIGHLIGHT_MYSTERY_OF_DAY = 'highlight-mystery-of-day';

@Component({
  selector: 'app-mystery-selector',
  templateUrl: './mystery-selector.component.html',
  styleUrls: ['./mystery-selector.component.scss']
})
export class MysterySelectorComponent implements OnInit {

  @Output()
  selectedMysteryEvent = new EventEmitter<RosaryMysteriesEnum>();

  @Output()
  onConfigViewEvent = new EventEmitter<string>();
  
  mysteryOfTheDayLabel: string;

  mysteryOfTheDay: RosaryMysteriesEnum;

  private dayOfWeek: number;

  constructor(private appConfig: AppConfigService,
              private localizationUtil: LocalizationService) {
    if (MYSTERY_LABEL_MAP.size === 0) {
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.GLORIOUS] = this.gloriousMystery;
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.JOYFUL] = this.joyfulMystery;
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.LUMINOUS] = this.luminousMystery;
      MYSTERY_LABEL_MAP[RosaryMysteriesEnum.SORROWFUL] = this.sorrowfulMystery;
    }

    this.dayOfWeek = (new Date()).getDay();
    this.mysteryOfTheDay = this.getMysteryOfTheDay();
    this.mysteryOfTheDayLabel = MYSTERY_LABEL_MAP[this.mysteryOfTheDay];
  }

  ngOnInit(): void { }

  onConfigView(): void {
    this.onConfigViewEvent.emit('mystery-selector');
  }

  get isPortrait(): boolean {
    return this.appConfig?.isPortrait;
  }

  get gloriousMystery(): string {
    return this.localizationUtil.gloriousMysteryLabel;
  }

  get gloriousMysteryNotes(): string {
    return $localize`:@@glorious-notes:Sunday and Wednesday`;
  }

  get joyfulMystery(): string {
    return this.localizationUtil.joyfulMysteryLabel;
  }

  get joyfulMysteryNotes(): string {
    return $localize`:@@joyful-notes:Monday, Saturday and Sunday during Advent`;
  }

  get luminousMystery(): string {
    return this.localizationUtil.luminousMysteryLabel;
  }

  get luminousMysteryNotes(): string {
    return $localize`:@@luminous-notes:Thursday`;
  }

  get sorrowfulMystery(): string {
    return this.localizationUtil.sorrowfulMysteryLabel;
  }

  get sorrowfulMysteryNotes(): string {
    return $localize`:@@sorrowful-notes:Tuesday, Friday and Sunday during Lent`;
  }

  get isGlorious(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.GLORIOUS)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  get isJoyful(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.JOYFUL)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  get isLuminous(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.LUMINOUS)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  get isSorrowful(): string {
    return (this.getMysteryOfTheDay() === RosaryMysteriesEnum.SORROWFUL)
      ? HIGHLIGHT_MYSTERY_OF_DAY : '';
  }

  getMysteryOfTheDay(): RosaryMysteriesEnum {
    if (this.dayOfWeek === SUN || this.dayOfWeek === WED) {
      return RosaryMysteriesEnum.GLORIOUS;
    }
    else if (this.dayOfWeek === MON || this.dayOfWeek === SAT) {
      return RosaryMysteriesEnum.JOYFUL;
    }
    else if (this.dayOfWeek === TUE || this.dayOfWeek === FRI) {
      return RosaryMysteriesEnum.SORROWFUL;
    }
    return RosaryMysteriesEnum.LUMINOUS;
  }

  selectByDay() {
    if (this.mysteryOfTheDay === RosaryMysteriesEnum.GLORIOUS) {
      this.selectGlorious();
    }
    else if (this.mysteryOfTheDay === RosaryMysteriesEnum.JOYFUL) {
      this.selectJoyful();
    }
    else if (this.mysteryOfTheDay === RosaryMysteriesEnum.SORROWFUL) {
      this.selectSorrowful();
    }
    else {
      this.selectLuminous();
    }
  }

  selectGlorious() {
    console.log(`selectGlorious`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.GLORIOUS);
  }

  selectJoyful() {
    console.log(`selectJoyful`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.JOYFUL);
  }

  selectLuminous() {
    console.log(`selectLuminous`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.LUMINOUS);
  }

  selectSorrowful() {
    console.log(`selectSorrowful`);
    this.selectedMysteryEvent.emit(RosaryMysteriesEnum.SORROWFUL);
  }

}
