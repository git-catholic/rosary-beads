import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Sequence } from '../../models/sequence';
import { CommonModule } from '@angular/common';
import { asLeaderResponse, asGroupPrayer } from '../../utils/typeof-utils';
import { EndComponent } from '../end/end.component';

@Component({
  selector: 'app-prayer-display',
  standalone: true,
  imports: [
    CommonModule,
    EndComponent
],
  templateUrl: './prayer-display.component.html',
  styleUrl: './prayer-display.component.scss'
})
export class PrayerDisplayComponent implements OnInit, OnChanges {

  @Input()
  prayerName: string;

  @Input()
  activePrayerSequence: Sequence;

  @Input()
  currentPrayerCounter: string;

  @Input()
  isPrayerSequenceDone: boolean;

  prayerLeader: string;
  prayerResponse: string;
  prayerAll: string;

  constructor() { }

  ngOnInit(): void {
    this.updatePrayer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatePrayer();
  }

  private updatePrayer(): void {
    this.prayerLeader = undefined;
    this.prayerResponse = undefined;
    this.prayerAll = undefined;

    if (this.activePrayerSequence === undefined) {
      return;
    }

    const leaderResponse = asLeaderResponse(this.activePrayerSequence);
    const groupPrayer = asGroupPrayer(this.activePrayerSequence);

    if (leaderResponse) {
      this.prayerLeader = leaderResponse?.leader;
      this.prayerResponse = leaderResponse?.response;
    }
    else if (groupPrayer) {
      this.prayerAll = groupPrayer?.all;
    }
  }

}
