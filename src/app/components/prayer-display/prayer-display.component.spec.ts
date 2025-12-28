import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerDisplayComponent } from './prayer-display.component';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';

describe('PrayerDisplayComponent', () => {
  let component: PrayerDisplayComponent;
  let fixture: ComponentFixture<PrayerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
