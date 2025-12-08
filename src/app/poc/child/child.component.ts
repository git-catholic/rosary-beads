// child.component.ts
import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { PrayerSwipeComponent } from '../../components/prayer-swipe/prayer-swipe.component';
import { Sequence } from '../../models/sequence';
import { Mysteries } from '../../models/holy-rosary/mysteries';
import { PrayerHolyRosary } from '../../models/holy-rosary/prayer-holy-rosary';
import { RosaryBeads } from '../../rosary-beads/rosary-beads';
import { PrayerFactoryService } from '../../services/prayer-factory.service';
import { RosaryMysteriesEnum } from '../../rosary-prayers/holy-rosary/rosary-helper';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [PrayerSwipeComponent],
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  prayerSequence: Sequence[];
  
  mysteries: Mysteries;
  activePrayer: PrayerHolyRosary;

  // @Output()
  // messageEmitter = new EventEmitter<string>();

  constructor(@Inject('onMessageEvent') private onMessageEvent: (message: string) => void,
              private prayerFactory: PrayerFactoryService) { }

  ngOnInit(): void {
    this.mysteries = this.prayerFactory.newPrayerMystery(RosaryMysteriesEnum.SORROWFUL);
    this.activePrayer = this.prayerFactory.newRosaryPrayer(this.mysteries, undefined);
    this.prayerSequence = this.activePrayer?.getPrayerSequence();
  }

  sendMessage() {
    // console.log(`emitting message - ${this.messageEmitter?.observed}`);
    // this.messageEmitter.emit('Hello from child!');
    this.onMessageEvent('Hello from the child!');
  }

  onSwipeIndex(swipeIndex: number) {
    console.log(`swipeIndex: ${swipeIndex}`);
  }

}