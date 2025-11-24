// import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { BeadGroupList } from '../../models/beads/bead-group-list';
// import { HolyRosaryPrayerComponent } from '../../rosary-prayers/holy-rosary/prayer/holy-rosary-prayer.component';

// @Component({
//   selector: 'app-active-prayer',
//   standalone: true,
//   imports: [HolyRosaryPrayerComponent],
//   templateUrl: './active-prayer.component.html',
//   styleUrls: ['./active-prayer.component.scss']
// })
// export class ActivePrayerComponent implements OnInit, AfterViewInit {

//   @Input()
//   activeBeadGroupList: BeadGroupList;

//   @Input()
//   debugTheEnd: boolean;

//   @Output()
//   onResetEvent = new EventEmitter<boolean>();

//   @Output()
//   onEnableNavigationEvent = new EventEmitter<boolean>();

//   @Output()
//   onConfigViewEvent = new EventEmitter<string>();

//   @ViewChild(HolyRosaryPrayerComponent)
//   holyRosaryPrayer: HolyRosaryPrayerComponent;

//   constructor() { }

//   ngOnInit(): void { }

//   ngAfterViewInit(): void {
//     this.holyRosaryPrayer.debugTheEnd = this.debugTheEnd;
//   }

//   get isPrayerSequenceDone(): boolean {
//     return this.activeBeadGroupList.isPrayerSequenceDone;
//   }

//   get prayerName(): string {
//     let name = this.activeBeadGroupList.prayerName();
//     return name[0].toUpperCase() + name.substring(1);
//   }

//   onNext() {
//     console.log('active-prayer next');
//     this.holyRosaryPrayer.onNext();
//   }

//   onPrevious() {
//     console.log('active-prayer prev');
//     this.holyRosaryPrayer.onPrevious();
//   }

//   onStartNew() {
//     this.onResetEvent.emit(true);
//   }

//   onEnableNavigation(flag: boolean) {
//     console.log(`active prayer nav flag: ${flag}`);
//     this.onEnableNavigationEvent.emit(flag);
//   }

//   onConfigView(source: string): void {
//     this.onConfigViewEvent.emit(source);
//   }
// }
