import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerSwipeComponent } from './prayer-swipe.component';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';

describe('PrayerSwipeComponent', () => {
  let component: PrayerSwipeComponent;
  let fixture: ComponentFixture<PrayerSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerSwipeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.prayerName = 'test-prayer';
    component.prayerSequence = [];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
