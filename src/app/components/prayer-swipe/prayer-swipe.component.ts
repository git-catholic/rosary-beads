import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { PrayerDisplayComponent } from '../prayer-display/prayer-display.component';
import { Sequence } from '../../models/sequence';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'app-prayer-swipe',
  standalone: true,
  imports: [
    CommonModule,
    PrayerDisplayComponent
],
  templateUrl: './prayer-swipe.component.html',
  styleUrl: './prayer-swipe.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrayerSwipeComponent implements OnInit, AfterViewInit {

  @Input()
  prayerName: string;

  @Input()
  prayerSequence: Sequence[];

  @Output()
  swipeIndexEvent = new EventEmitter<number>();
  
  @ViewChild('prayerSwiper')
  private swiperContainer: SwiperContainer;

  @ViewChild('prayerSwiper')
  swiperContainerEl: ElementRef<SwiperContainer>;

  private swiper: Swiper;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
  };

  constructor(private appConfig: AppConfigService) { }

  ngOnInit(): void {
    this.swiperContainer = document.querySelector('swiper-container');
    this.swiperContainer.addEventListener('swiperslidechange', ($event) => this.onSlideChange($event));
    this.swiperContainer.addEventListener('swiperreachend', () => this.onReachEnd());
    this.swiperContainer.addEventListener('swiperreachbeginning', () => this.onReachBeginning());
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperContainerEl?.nativeElement?.swiper;

    this.prayerSequence = this.preprocessSequence();
    this.swiperContainer.navigation = {
      nextEl: '#custom-next-button',
      prevEl: '#custom-prev-button'
    }
  }

  get prevButtonClass(): string {
    return (this.leftArrowDisabled)
      ? 'custom-prev-button-disabled'
      : 'custom-prev-button';
  }

  get nextButtonClass(): string {
    return (this.rightArrowDisabled)
      ? 'custom-next-button-disabled'
      : 'custom-next-button';
  }

  get leftArrowDisabled(): boolean {
    return this.swiperIndex <= 0;
  }

  get rightArrowDisabled(): boolean {
    return (this.swiperIndex + 1) >= this.prayerSequence?.length;
  }

  get swiperIndex(): number {
    return this.swiper?.activeIndex;
  }

  set swiperIndex(newIndex: number) {
    this.swiper?.slideTo(newIndex);
  }

  get isNavigationEnabled(): boolean {
    return this.appConfig?.isNavigationEnabled;
  }

  checkSequenceDone(sequenceIndex: number): boolean {
    return (sequenceIndex + 1) >= this.prayerSequence?.length;
  }

  onNext(): void {
    this.swiper?.slideNext();
  }

  onPrev(): void {
    this.swiper?.slidePrev();
  }

  onSlideChange(event: any): void {
    console.log(`Slide changed to index: ${event.detail[0].activeIndex} - ${this.prayerSequence?.length}`);
    this.swipeIndexEvent.emit(event.detail[0].activeIndex);
  }

  onReachEnd(): void {
    console.log('Swiper reached the end!');
  }

  onReachBeginning(): void {
    console.log('Swiper reached the beginning!');
  }

  private preprocessSequence(): Sequence[] {
    const expandedSequence = [];
    this.prayerSequence.forEach(sequence => {
      for (let idx = 0; idx < sequence?.maxTimes; idx++) {
        const sequenceEntry = {
          ...sequence
        };
        sequenceEntry.prayerLabel = (sequence?.maxTimes > 1)
          ? `${idx + 1} / ${sequence.maxTimes}`
          : undefined;
        expandedSequence.push(sequenceEntry);
      }
    })
    return expandedSequence;
  }

}
