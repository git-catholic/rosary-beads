import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { AppConfigService } from '../../services/app-config.service';
import { PrayerDisplayComponent } from '../../components/prayer-display/prayer-display.component';
import { RosaryBeadsContainerComponent } from '../../rosary-beads/rosary-beads-container/rosary-beads-container.component';
import { Mysteries } from '../../models/holy-rosary/mysteries';
import { PrayerHolyRosary } from '../../models/holy-rosary/prayer-holy-rosary';
import { RosaryBeads } from '../../rosary-beads/rosary-beads';
import { RosaryMysteriesEnum } from '../../rosary-prayers/holy-rosary/rosary-helper';
import { PrayerFactoryService } from '../../services/prayer-factory.service';
import { Sequence } from '../../models/sequence';


@Component({
  selector: 'app-swipe',
  standalone: true,
  imports: [
    CommonModule,
    PrayerDisplayComponent,
    RosaryBeadsContainerComponent,
    // AppRoutingModule
],
  templateUrl: './swipe.component.html',
  styleUrl: './swipe.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwipeComponent implements OnInit, AfterViewInit {

  // @Input()
  prayerSequence: Sequence[];
  
  @ViewChild('mySwiper')
  private swiperContainer: SwiperContainer;

  @ViewChild('mySwiper')
  swiperContainerEl: ElementRef<SwiperContainer>;

  private swiper: Swiper;

  mysteries: Mysteries;
  rosaryBeads: RosaryBeads;
  activePrayer: PrayerHolyRosary;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
  };

  constructor(private appConfig: AppConfigService,
              private prayerFactory: PrayerFactoryService) {
    console.log(`constructor`);
  }

  ngOnInit(): void {
    // this.swiperEl.addEventListener('swiperprogress', (event) => {
    //   const [swiper, progress] = event.detail;
    // });

    // this.swiperEl.addEventListener('swiperslidechange', (event) => {
    //   console.log('slide changed');
    // });

    // this.rosaryBeads = new PatsBeadsComponent(this.appConfig);  //this.prayerFactory.newBeadsByType('any');
    console.log(`set up`);
    this.mysteries = this.prayerFactory.newPrayerMystery(RosaryMysteriesEnum.SORROWFUL);
    this.activePrayer = this.prayerFactory.newRosaryPrayer(this.mysteries, undefined);
    console.log(`seq: ${this.activePrayer?.currentSequence?.toString()}`);

    console.log(`SwipeComponent - ngOnInit()`);
    this.swiperContainer = document.querySelector('swiper-container');
    this.swiperContainer.addEventListener('swiperslidechange', ($event) => this.onSlideChange($event));
    this.swiperContainer.addEventListener('swiperreachend', () => this.onReachEnd());
    this.swiperContainer.addEventListener('swiperreachbeginning', () => this.onReachBeginning());
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperContainerEl?.nativeElement?.swiper;
    console.log(`have swiper? ${this.swiper}`);

    // const baseSequence = this.activePrayer?.getPrayerSequence();
    // const useSequence = [
    //   baseSequence[0], baseSequence[1], baseSequence[2]
    // ]
    this.prayerSequence = this.preprocessSequence();
    this.swiperContainer.navigation = {
      nextEl: '#custom-next-button',
      prevEl: '#custom-prev-button'
    }
  }

  onNext(): void {
    console.log(`onNext - ${this.swiperContainer?.swiper} - ${this.swiperContainerEl?.nativeElement?.swiper}`);
    this.swiperContainerEl?.nativeElement?.swiper?.slideNext();
    // this.swiperContainerEl.nativeElement.swi
  }

  onPrev(): void {
    console.log(`onPrev - ${this.swiperContainer?.swiper} - ${this.swiperContainerEl?.nativeElement}`);
    this.swiperContainerEl?.nativeElement?.swiper?.slidePrev();
  }

  onSlideChange(event: any): void {
    console.log(`Slide changed to index: ${event.detail[0].activeIndex}`);
    // this.swiper?.slideTo(2);
    // You can access the Swiper instance via event.detail[0]
  }

  onReachEnd(): void {
    console.log('Swiper reached the end!');
  }

  onReachBeginning(): void {
    console.log('Swiper reached the beginning!');
  }

  private preprocessSequence(): Sequence[] {
    const expandedSequence = [];
    this.activePrayer?.getPrayerSequence().forEach(sequence => {
      for (let idx = 0; idx < sequence?.maxTimes; idx++) {
        expandedSequence.push(sequence);
      }
    })
    return expandedSequence;
  }

}
