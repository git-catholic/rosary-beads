import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroup } from '../../../models/beads/bead-group';
import { PrayerApostlesCreed, PrayerGlory, PrayerGloryFatima, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from '../../../models/prayers/common-prayers';
import { PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerHailHolyQueen } from '../../../models/prayers/rosary-prayers';
import { PatsBeadsComponent } from '../../../rosary-beads/pats-beads/pats-beads.component';
import { SequenceTemplate } from '../../../models/sequence';
import { PrayerSequence } from '../../../models/prayer-sequence';
import { SoundService } from '../../../services/sound.service';

const seqMap = new Map<string, SequenceTemplate>();
seqMap['closing1'] = new PrayerClosing1();
seqMap['closing2'] = new PrayerClosing2();
seqMap['creed'] = new PrayerApostlesCreed();
seqMap['glory'] = new PrayerGlory();
seqMap['fatima'] = new PrayerFatima();
seqMap['glory-fatima'] = new PrayerGloryFatima();
seqMap['hail-holy-queen'] = new PrayerHailHolyQueen();
seqMap['hail-mary'] = new PrayerHailMary();
seqMap['our-father'] = new PrayerOurFather();
seqMap['sign-cross'] = new PrayerSignOfTheCross();

@Component({
  selector: 'app-holy-rosary-prayer',
  standalone: true,
  imports: [PatsBeadsComponent],
  templateUrl: './holy-rosary-prayer.component.html',
  styleUrls: ['./holy-rosary-prayer.component.scss']
})
export class HolyRosaryPrayerComponent implements OnInit {

  @Input()
  prayerName: string;

  @Input()
  debugTheEnd: boolean;

  @Input()
  orientation: string;

  @ViewChild('rosaryBeads')
  rosaryBeads: PatsBeadsComponent;

  @ViewChild('primaryPrayer')
  currentPrayerComponent: PatsBeadsComponent;

  activeBeadGroup: BeadGroup;
  currentPrayer: PrayerSequence;
  sequenceBeadIndex: number;  // This corresponds to prayer index in sequence
  highlightBeadIndex: number; // This corresponds to bead index on Rosary beads. Some prayers share the same bead.

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    // this.activeBeadGroup = this.activeBeadGroupList.next();
    this.sequenceBeadIndex = 0;
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }

    console.log(`before rosary beads - ${this.rosaryBeads}`);
    this.rosaryBeads.start();
    console.log('after rosary beads');
    console.log('before current prayer');
    this.currentPrayer.start();
    console.log('after current prayer');
  }

  get showMystery(): boolean {
    // const mysteryNumber = this.activeBeadGroupList.mysteryNumber();
    return true;  //(mysteryNumber >= 1 && mysteryNumber <= 5 && this.activeBeadGroupList.mystery() !== undefined);
  }

  onNext() {
    const previousBead = this.activeBeadGroup;
    //this.activeBeadGroup = this.activeBeadGroupList.next();
    if (this.activeBeadGroup) {
      this.sequenceBeadIndex++;
      if (this.activeBeadGroup.anchorId === undefined || previousBead.anchorId === undefined) {
        this.highlightBeadIndex++;
      }
    }
    this.callNext(this.currentPrayer, 'currentPrayer');
    this.callNext(this.rosaryBeads, 'rosaryBeads');

    this.soundService.playSound(this.activeBeadGroup.phoneFeedback);
  }

  onPrevious() {
    //this.activeBeadGroup = this.activeBeadGroupList.previous();
    if (this.activeBeadGroup) {
      this.sequenceBeadIndex--;
      if (this.activeBeadGroup.anchorId === undefined) {
        this.highlightBeadIndex--;
      }
    }
    this.callPrevious(this.currentPrayer, 'currentPrayer');
    this.callPrevious(this.rosaryBeads, 'rosaryBeads');
  }

  private callNext(sequence: PrayerSequence, desc: string): void {
    if (sequence?.hasNext()) {
      sequence.next();
    }
  }

  private callPrevious(sequence: PrayerSequence, desc: string): void {
    if (sequence?.hasPrevious()) {
      sequence.previous();
    }
  }

}
