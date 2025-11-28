import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
// import { BeadGroupList } from '../../../models/beads/bead-group-list';
// import { ActivePrayerComponent } from '../../../components/active-prayer/active-prayer.component';
import { AppConfigService } from '../../../services/app-config.service';
import { LiturgicalYearService } from '../../../services/liturgical-year.service';
import { RosaryMysteriesEnum } from '../rosary-helper';
import { MysterySelectorComponent } from '../mystery-selector/mystery-selector.component';
import { NoticesComponent } from '../../../components/notices/notices.component';
import { Router } from '@angular/router';
import { HOLY_ROSARY_PRAYER } from '../../../app-routing.module';

@Component({
  selector: 'app-holy-rosary-home',
  standalone: true,
  imports: [
    CommonModule,
    MysterySelectorComponent,
    NoticesComponent
  ],
  templateUrl: './holy-rosary-home.component.html',
  styleUrls: ['./holy-rosary-home.component.scss']
})
export class HolyRosaryHomeComponent implements OnInit {

  @Input()
  selectedMysteryId: string;

  // selectedBeadGroupList: BeadGroupList;

  navigationEnabled: boolean;

  showConfigView: boolean;

  // @ViewChild(ActivePrayerComponent)
  // activePrayer: ActivePrayerComponent;

  elem: any;

  private exitingConfig = false;

  constructor(public appConfig: AppConfigService,
              private liturgicalYear: LiturgicalYearService,
              private router: Router,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    console.log(`selectedMysteryId: ${this.selectedMysteryId}`);
    if (this.selectedMysteryId) {
      this.onMysterySelected(RosaryMysteriesEnum[this.selectedMysteryId]);
    }
    this.elem = document.documentElement;
  }

  onMysterySelected(selectedMystery: RosaryMysteriesEnum): void {
    console.log(`selected mystery: ${selectedMystery}`);
    this.router.navigate([HOLY_ROSARY_PRAYER, selectedMystery as RosaryMysteriesEnum]);
    // this.router.componentInputBindingEnabled
    // this.selectedBeadGroupList = this.beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(selectedMystery);
  }

  get showMysterySelector(): boolean {
    return true;  // this.selectedBeadGroupList === undefined;
  }

  // onResetEvent(flag: boolean): void {
  //   this.selectedBeadGroupList = undefined;
  //   this.liturgicalYear.overrideLiturgicalColor = undefined;
  // }

  /*
  onEnableNavigation(flag: boolean): void {
    console.log(`home: ${flag}`);
    this.navigationEnabled = flag;
  }

  onNext(): void {
    console.log(`next method: ${this.exitingConfig}`);
    if (this.exitingConfig) {
      this.exitingConfig = false;
    }
    else {
      this.activePrayer.onNext();
    }
  }

  onPrevious(): void {
    if (this.exitingConfig) {
      this.exitingConfig = false;
    }
    else {
      this.activePrayer.onPrevious();
    }
  }

  onSwipe(event: HammerInput) {
    if (this.processSwipeEvent(event)) {
      if (Hammer.DIRECTION_LEFT === event?.direction) {
        this.onNext();
      }
      else if (Hammer.DIRECTION_RIGHT === event?.direction) {
        this.onPrevious();
      }
    }
  }
  */

  onConfigView(source: string): void {
    this.showConfigView = true;
  }

  onCloseConfigView(): void {
    this.exitingConfig = true;
    this.showConfigView = false;
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      console.log(`${this.elem.requestFullscreen}`);
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      // Firefox
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      // IE/Edge
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      // Firefox 
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      // Chrome, Safari and Opera
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      // IE/Edge
      this.document.msExitFullscreen();
    }
  }

  /*
  private processSwipeEvent(ev: HammerInput): boolean {
    return !this.showConfigView && !this.showMysterySelector && ev.isFinal;
  }
  */
}
