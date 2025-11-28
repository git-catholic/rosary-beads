import { AfterContentInit, AfterViewInit, Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { BeadGroup } from '../../../models/beads/bead-group';
import { PrayerApostlesCreed, PrayerGlory, PrayerGloryFatima, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from '../../../models/prayers/common-prayers';
import { PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerHailHolyQueen } from '../../../models/prayers/rosary-prayers';
import { PatsBeadsComponent } from '../../../rosary-beads/pats-beads/pats-beads.component';
import { GroupPrayerTemplate, LeaderResponseTemplate, SequenceTemplate } from '../../../models/sequence';
import { PrayerSequence } from '../../../models/prayer-sequence';
import { SoundService } from '../../../services/sound.service';
import { ActivatedRoute } from '@angular/router';
import { PrayerFactoryService } from '../../../services/prayer-factory.service';
import { RosaryBeads } from '../../../rosary-beads/rosary-beads';
import { RosaryMysteriesEnum } from '../rosary-helper';
import { HeaderComponent } from '../../../components/header/header.component';
import { Mysteries } from '../../../models/holy-rosary/mysteries';
import { MysteryDisplayComponent } from '../mystery-display/mystery-display.component';
import { CommonModule } from '@angular/common';
import { PrayerHolyRosary } from '../../../models/holy-rosary/prayer-holy-rosary';
import { asGroupPrayer, asLeaderResponse } from '../../../utils/typeof-utils';
import { RosaryBeadsContainerComponent } from '../../../rosary-beads/rosary-beads-container/rosary-beads-container.component';

// const seqMap = new Map<string, SequenceTemplate>();
// seqMap['closing1'] = new PrayerClosing1();
// seqMap['closing2'] = new PrayerClosing2();
// seqMap['creed'] = new PrayerApostlesCreed();
// seqMap['glory'] = new PrayerGlory();
// seqMap['fatima'] = new PrayerFatima();
// seqMap['glory-fatima'] = new PrayerGloryFatima();
// seqMap['hail-holy-queen'] = new PrayerHailHolyQueen();
// seqMap['hail-mary'] = new PrayerHailMary();
// seqMap['our-father'] = new PrayerOurFather();
// seqMap['sign-cross'] = new PrayerSignOfTheCross();

@Component({
  selector: 'app-holy-rosary-prayer',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RosaryBeadsContainerComponent
    // PatsBeadsComponent
  ],
  templateUrl: './holy-rosary-display.component.html',
  styleUrls: ['./holy-rosary-display.component.scss']
})
export class HolyRosaryDisplayComponent implements AfterViewInit {

  // @Input()
  // prayerName: string;

  // @Input()
  // debugTheEnd: boolean;

  // @Input()
  // orientation: string;

  @ViewChild('rosaryBeads')
  rosaryBeadsContainer: RosaryBeadsContainerComponent;

  rosaryBeads: RosaryBeads;

  beadsByType: Type<RosaryBeads>;

  activeMysteries: Mysteries;
  
  // @ViewChild('primaryPrayer')
  // currentPrayerComponent: RosaryBeads;

  // activeBeadGroup: BeadGroup;
  currentPrayer: PrayerSequence;
  sequenceBeadIndex: number;  // This corresponds to prayer index in sequence
  // highlightBeadIndex: number; // This corresponds to bead index on Rosary beads. Some prayers share the same bead.

  private mystery: RosaryMysteriesEnum;
  private mysteryNumbers = [undefined, '1st', '2nd', '3rd', '4th', '5th'];

  constructor(private soundService: SoundService,
              private activatedRoute: ActivatedRoute,
              private prayerFactory: PrayerFactoryService) {
    console.log(`constructor - HolyRosaryDisplayComponent 1`);
    this.mystery = this.activatedRoute.snapshot.paramMap.get('mystery') as unknown as RosaryMysteriesEnum;
    console.log(`constructor - HolyRosaryDisplayComponent 2`);
    this.beadsByType = this.prayerFactory.newBeadsByType('any');
    console.log(`constructor - HolyRosaryDisplayComponent 3`);
    this.activeMysteries = this.prayerFactory.newPrayerMystery(this.mystery);
    console.log(`constructor - HolyRosaryDisplayComponent 4`);
    this.currentPrayer = this.prayerFactory.newRosaryPrayer(this.activeMysteries, this.rosaryBeadsContainer);
    console.log(`constructor - HolyRosaryDisplayComponent 5`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit - HolyRosaryDisplayComponent - ${this.rosaryBeadsContainer}`);
    // this.sequenceBeadIndex = 0;
    // this.rosaryBeads.start();
    // // console.log(`++current prayer? ${JSON.stringify(this.currentPrayer)}`);
    // this.debugCurrentPrayer();
    // this.currentPrayer.start();
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit - HolyRosaryDisplayComponent - ${this.rosaryBeadsContainer}`);
    // this.sequenceBeadIndex = 0;
    // this.rosaryBeads.start();
    // // console.log(`++current prayer? ${JSON.stringify(this.currentPrayer)}`);
    // this.debugCurrentPrayer();
    // this.currentPrayer.start();
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit - HolyRosaryDisplayComponent - ${this.rosaryBeadsContainer?.name} - ${this.rosaryBeadsContainer?.isPatsBeadsComponent}`);
    this.sequenceBeadIndex = 0;
    this.rosaryBeadsContainer.start();
    // console.log(`++current prayer? ${JSON.stringify(this.currentPrayer)}`);
    this.debugCurrentPrayer();
    this.currentPrayer.start();
  }

  onActiveBeads(activeBeads: any) {
    console.log(`+++ received new rosary beads!`);
    this.rosaryBeads = activeBeads as RosaryBeads;
  }


  get showMystery(): boolean {
    // const mysteryNumber = this.activeBeadGroupList.mysteryNumber();
    return true;  //(mysteryNumber >= 1 && mysteryNumber <= 5 && this.activeBeadGroupList.mystery() !== undefined);
  }

  // getBeadsComponent(): RosaryBeads {
  //   return this.rosaryBeads;
  // }

  // getBeadsComponent(): Type<RosaryBeads> {
  //   return Type<this.rosaryBeads>;
  // }


  onNext() {
    if (this.currentPrayer?.hasNext()) {
      this.currentPrayer.next();
      this.debugCurrentPrayer();
    }
    console.log(`display onNext called: ${this.rosaryBeadsContainer}`);
    this.rosaryBeadsContainer.updateBeadPosition(this.currentPrayer.currentIndex);
  }

  onPrevious() {
    if (this.currentPrayer?.hasPrevious()) {
      this.currentPrayer.previous();
      this.debugCurrentPrayer();
    }
    console.log(`display onPrevious called: ${this.rosaryBeadsContainer}`);
    this.rosaryBeadsContainer.updateBeadPosition(this.currentPrayer.currentIndex);
  }

  private debugCurrentPrayer() {
    console.log(`current: ${this.currentPrayer.toString()}`)
    // const leaderResponse = asLeaderResponse(this.currentPrayer?);
    // const groupPrayer = asGroupPrayer(this.currentPrayer);

    // if (leaderResponse !== undefined) {
    //   console.log(`leader: ${leaderResponse.leader}`);
    //   console.log(`response: ${leaderResponse.response}`);
    // }
    // else if (groupPrayer !== undefined) {
    //   console.log(`all: ${groupPrayer.all}`);
    // }
    // else {
    //   console.log(`nothing defined`);
    // }
  }

}
