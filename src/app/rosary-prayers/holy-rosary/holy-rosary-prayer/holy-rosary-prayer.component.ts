import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BeadGroup } from 'src/app/models/bead-group';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { Prayer, PrayerApostlesCreed, PrayerClosing1, PrayerClosing2, PrayerFatima, PrayerGlory, PrayerGloryFatima, PrayerHailHolyQueen, PrayerHailMary, PrayerOurFather, PrayerSignOfTheCross } from 'src/app/prayers/common-prayers';
import { SoundService } from 'src/app/services/sound.service';
import { PatsBeadsComponent } from '../../../rosary-beads/pats-beads/pats-beads.component';
import { CurrentPrayerComponent } from '../current-prayer/current-prayer.component';

const seqMap = new Map<string, Prayer>();
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
  templateUrl: './holy-rosary-prayer.component.html',
  styleUrls: ['./holy-rosary-prayer.component.scss']
})
export class HolyRosaryPrayerComponent implements OnInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @Input()
  prayerName: string;

  @Input()
  debugTheEnd: boolean;

  @Input()
  orientation: string;

  @ViewChild('rosaryBeads')
  rosaryBeads: PatsBeadsComponent;

  @ViewChild('primaryPrayer')
  currentPrayerComponent: CurrentPrayerComponent;

  activeBeadGroup: BeadGroup;
  currentPrayer: Prayer;
  sequenceBeadIndex: number;  // This corresponds to prayer index in sequence
  highlightBeadIndex: number; // This corresponds to bead index on Rosary beads. Some prayers share the same bead.

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.activeBeadGroup = this.activeBeadGroupList.next();
    this.sequenceBeadIndex = 0;
    this.highlightBeadIndex = 0;

    if (this.orientation === undefined) {
      this.orientation = 'wide';
    }

    this.currentPrayer = this.findCurrentPrayer();
  }

  get showMystery(): boolean {
    const mysteryNumber = this.activeBeadGroupList.mysteryNumber();
    return (mysteryNumber >= 1 && mysteryNumber <= 5 && this.activeBeadGroupList.mystery() !== undefined);
  }

  onNext() {
    const previousBead = this.activeBeadGroup;
    this.activeBeadGroup = this.activeBeadGroupList.next();
    if (this.activeBeadGroup) {
      this.sequenceBeadIndex++;
      if (this.activeBeadGroup.anchorId === undefined || previousBead.anchorId === undefined) {
        this.highlightBeadIndex++;
      }
    }
    this.currentPrayer = this.findCurrentPrayer();
    this.rosaryBeads.updateBeadPosition(this.highlightBeadIndex);
    this.soundService.playSound(this.activeBeadGroup.phoneFeedback);
  }

  onPrevious() {
    this.activeBeadGroup = this.activeBeadGroupList.previous();
    if (this.activeBeadGroup) {
      this.sequenceBeadIndex--;
      if (this.activeBeadGroup.anchorId === undefined) {
        this.highlightBeadIndex--;
      }
    }
    this.currentPrayer = this.findCurrentPrayer();
    this.rosaryBeads.updateBeadPosition(this.highlightBeadIndex);
  }

  private findCurrentPrayer(): Prayer {
    return seqMap[this.activeBeadGroup?.sequence];
  }

}
