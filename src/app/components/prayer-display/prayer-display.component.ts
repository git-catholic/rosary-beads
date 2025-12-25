import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Sequence } from '../../models/sequence';
import { CommonModule } from '@angular/common';
import { asLeaderResponse, asGroupPrayer } from '../../utils/typeof-utils';
import { EndComponent } from '../end/end.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-prayer-display',
  standalone: true,
  imports: [
    CommonModule,
    EndComponent,
    TranslateModule
],
  templateUrl: './prayer-display.component.html',
  styleUrl: './prayer-display.component.scss'
})
export class PrayerDisplayComponent {

  @Input()
  prayerName: string;

  @Input()
  activePrayerSequence: Sequence;

  @Input()
  currentPrayerCounter: string;

  @Input()
  isPrayerSequenceDone: boolean;

  constructor(private translate: TranslateService) { }

  get prayerLeader(): string {
    const leaderResponse = asLeaderResponse(this.activePrayerSequence);
    return (leaderResponse)
      ? this.translate.instant(leaderResponse?.leader)
      : '';
  }

  get prayerResponse(): string {
    const leaderResponse = asLeaderResponse(this.activePrayerSequence);
    return (leaderResponse)
      ? this.translate.instant(leaderResponse?.response)
      : '';
  }

  get prayerAll(): string {
    const groupPrayer = asGroupPrayer(this.activePrayerSequence);
    return (groupPrayer)
      ? this.translate.instant(groupPrayer?.all)
      : '';
  }

}
