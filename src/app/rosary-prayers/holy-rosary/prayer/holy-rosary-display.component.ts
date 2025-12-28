import { AfterViewInit, Component, Type, ViewChild } from '@angular/core';
import { PrayerSequence } from '../../../models/prayer-sequence';
import { SoundService } from '../../../services/sound.service';
import { ActivatedRoute } from '@angular/router';
import { PrayerFactoryService } from '../../../services/prayer-factory.service';
import { RosaryBeads } from '../../../rosary-beads/rosary-beads';
import { HeaderComponent } from '../../../components/header/header.component';
import { Mysteries } from '../../../models/holy-rosary/mysteries';
import { MysteryDisplayComponent } from '../mystery-display/mystery-display.component';
import { CommonModule } from '@angular/common';
import { RosaryBeadsContainerComponent } from '../../../rosary-beads/rosary-beads-container/rosary-beads-container.component';
import { Sequence } from '../../../models/sequence';
import { PrayerSwipeComponent } from '../../../components/prayer-swipe/prayer-swipe.component';
import { LocalizationService } from '../../../services/localization.service';

@Component({
  selector: 'app-holy-rosary-prayer',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MysteryDisplayComponent,
    PrayerSwipeComponent,
    RosaryBeadsContainerComponent
  ],
  templateUrl: './holy-rosary-display.component.html',
  styleUrls: ['./holy-rosary-display.component.scss']
})
export class HolyRosaryDisplayComponent implements AfterViewInit {

  @ViewChild('rosaryBeads')
  rosaryBeadsContainer: RosaryBeadsContainerComponent;

  rosaryBeads: RosaryBeads;

  beadsByType: Type<RosaryBeads>;

  activeMysteries: Mysteries;
  
  currentPrayer: PrayerSequence;

  mysteryNumber: string;
  mysteryDesc: string;
  mysteryFruit: string;

  prayerLeader: string;
  prayerResponse: string;
  prayerAll: string;

  sequenceBeadIndex: number;  // This corresponds to prayer index in sequence
  // highlightBeadIndex: number; // This corresponds to bead index on Rosary beads. Some prayers share the same bead.

  private mystery: number;

  constructor(private soundService: SoundService,
              private activatedRoute: ActivatedRoute,
              private prayerFactory: PrayerFactoryService,
              private localizationService: LocalizationService) {
    this.mystery = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('mystery'));
    console.log(`+++ HolyRosaryDisplayComponent - mystery: ${this.mystery}`);
    this.beadsByType = this.prayerFactory.newBeadsByType('any');
    this.activeMysteries = this.prayerFactory.newPrayerMystery(this.mystery);
    console.log(`+++ activeMysteries: ${JSON.stringify(this.activeMysteries)}`);
    this.currentPrayer = this.prayerFactory.newRosaryPrayer(this.activeMysteries, this.rosaryBeadsContainer);
  }

  ngOnInit(): void {
    console.debug(`HolyRosaryDisplayComponent - ngOnInit`);
  }

  ngAfterContentInit(): void {
    console.debug(`HolyRosaryDisplayComponent - ngAfterContentInit`);
  }

  ngAfterViewInit(): void {
    this.sequenceBeadIndex = 0;
    this.rosaryBeadsContainer.start();
    this.currentPrayer.start();
  }

  get showMystery(): boolean {
    return this.mysteryNumber !== undefined;
  }

  get currentPrayerSequence(): Sequence {
    return this.currentPrayer?.currentSequence;
  }

  get fullPrayerSequence(): Sequence[] {
    return this.currentPrayer?.getPrayerSequence();
  }

  get prayerName(): string {
    return this.localizationService?.prayerHolyRosary;
  }

  get isPrayerSequenceDone(): boolean {
    return this.currentPrayer?.isPrayerSequenceDone;
  }

  onActiveBeads(activeBeads: any) {
    this.rosaryBeads = activeBeads as RosaryBeads;
  }

  onSwipeIndex(swipeIndex: number) {
    if (this.currentPrayer.currentIndex < swipeIndex) {
      this.onNext();
    }
    else if (this.currentPrayer.currentIndex > swipeIndex) {
      this.onPrevious();
    }
  }

  onNext() {
    if (this.currentPrayer?.hasNext()) {
      this.currentPrayer.next();
    }
    this.updateDisplayAndPositions();
  }

  onPrevious() {
    if (this.currentPrayer?.hasPrevious()) {
      this.currentPrayer.previous();
    }
    this.updateDisplayAndPositions();
  }

  private updateDisplayAndPositions(): void {
    this.rosaryBeadsContainer.updateBeadPosition(this.currentPrayer.currentIndex);
    this.updateMystery();
    // this.updateCurrentPrayerCounter();
  }

  private updateMystery(): void {
    const rootId = Number.parseInt(this.rosaryBeads?.getActiveBeadDetails()?.id?.charAt(0));
    const activeMystery = this.activeMysteries.mystery(rootId);
    console.log(`updateMystery: name/number=${activeMystery?.name}, desc=${activeMystery?.mystery}, fruit=${activeMystery?.fruit}`);
    this.mysteryNumber = activeMystery?.name;
    this.mysteryDesc = activeMystery?.mystery;
    this.mysteryFruit = activeMystery?.fruit;
  }

  // private updateCurrentPrayerCounter(): void {
  //   if (!this.isHailMary()) {
  //     console.debug(`not a hail mary??`);
  //     this.currentPrayerCounter = undefined;
  //     return;
  //   }

  //   const beadId = this.rosaryBeads?.getActiveBeadDetails()?.id;
  //   const rootId = Number.parseInt(beadId?.charAt(0));
  //   const hailMaryNum = Number.parseInt(beadId?.substring(2));
  //   const maxBeads = (rootId === 0) ? 3 : 10;
  //   console.debug(`beadId: ${beadId}, rootId: ${rootId}, HailMary# ${hailMaryNum}, maxBeads: ${maxBeads}`);

  //   this.currentPrayerCounter = (hailMaryNum > 0)
  //     ? `(${hailMaryNum} / ${maxBeads})`
  //     : undefined;
  // }

  // private isHailMary(): boolean {
  //   return this.currentPrayer?.currentSequence?.id === 'PrayerHailMary';
  // }

  private debugCurrentPrayer() {
    console.log(`current: ${this.currentPrayer.toString()}`)
  }

}
