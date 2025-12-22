import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service';
import { LiturgicalYearService } from '../../../services/liturgical-year.service';
import { RosaryMysteriesEnum } from '../../../utils/rosary-mysteries-enum';
import { MysterySelectorComponent } from '../mystery-selector/mystery-selector.component';
import { NoticesComponent } from '../../../components/notices/notices.component';
import { Router } from '@angular/router';
import { HOLY_ROSARY_HOME, HOLY_ROSARY_PRAYER, PRAYER_CONFIG } from '../../../app-routing.module';

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
  }

  get showMysterySelector(): boolean {
    return true;  // this.selectedBeadGroupList === undefined;
  }

  onConfigView(source: string): void {
    console.log(`route to config?`);
    this.router.navigate([PRAYER_CONFIG, { source: HOLY_ROSARY_HOME }]);
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
