import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { LocalizationService } from 'src/app/services/localization.service';
import { HolyRosaryPrayerComponent } from '../../rosary-prayers/holy-rosary/holy-rosary-prayer/holy-rosary-prayer.component';

@Component({
  selector: 'app-active-prayer',
  templateUrl: './active-prayer.component.html',
  styleUrls: ['./active-prayer.component.scss']
})
export class ActivePrayerComponent implements OnInit, AfterViewInit {

  @Input()
  activeBeadGroupList: BeadGroupList;

  @Input()
  debugTheEnd: boolean;

  @Output()
  onResetEvent = new EventEmitter<boolean>();

  @Output()
  onEnableNavigationEvent = new EventEmitter<boolean>();

  @Output()
  onConfigViewEvent = new EventEmitter<string>();

  @ViewChild(HolyRosaryPrayerComponent)
  holyRosaryPrayer: HolyRosaryPrayerComponent;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.holyRosaryPrayer.debugTheEnd = this.debugTheEnd;
  }

  get isPrayerSequenceDone(): boolean {
    return this.activeBeadGroupList.isPrayerSequenceDone;
  }

  get prayerName(): string {
    let name = this.activeBeadGroupList.prayerName();
    return name[0].toUpperCase() + name.substring(1);
  }

  onNext() {
    console.log('active-prayer next');
    this.holyRosaryPrayer.onNext();
  }

  onPrevious() {
    console.log('active-prayer prev');
    this.holyRosaryPrayer.onPrevious();
  }

  onStartNew() {
    this.onResetEvent.emit(true);
  }

  onEnableNavigation(flag: boolean) {
    console.log(`active prayer nav flag: ${flag}`);
    this.onEnableNavigationEvent.emit(flag);
  }

  onConfigView(source: string): void {
    this.onConfigViewEvent.emit(source);
  }
}
