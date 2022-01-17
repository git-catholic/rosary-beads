import { Component, Input, OnInit } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { Prayer, PrayerHailMary } from 'src/app/prayers/common-prayers';

const cssClassesColumn1 = 'gtp-cell-plain-1 gtp-cell-plain-1-phone gtp-pre-line';
const cssClassesColumn2 = 'gtp-cell-plain-11 gtp-cell-plain-11-phone gtp-pre-line';

@Component({
  selector: 'app-current-prayer',
  templateUrl: './current-prayer.component.html',
  styleUrls: ['./current-prayer.component.scss']
})
export class CurrentPrayerComponent implements OnInit {

  @Input()
  activeBeadGroup: BeadGroup;

  @Input()
  currentPrayer: Prayer;

  @Input()
  prayerName: string;

  constructor() { }

  ngOnInit(): void { }

  beadStatus(): string {
    return (this.currentPrayer instanceof PrayerHailMary)
      ? `(${this.activeBeadGroup.index + 1} / ${this.activeBeadGroup.maxIndex})`
      : undefined;
  }

  currentPrayerCounter(): string {
    return (this.activeBeadGroup?.maxIndex > 1)
      ? `(${this.activeBeadGroup.index + 1} / ${this.activeBeadGroup.maxIndex}) `
      : '';
  }

  currentPrayerLeader(): string {
    return `${this.currentPrayer.leader}`;
  }

}
