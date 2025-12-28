import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppDateService } from 'src/app/services/app-date.service';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';
import { LocalizationService } from 'src/app/services/localization.service';

import { LiturgicalDatesComponent } from './liturgical-dates.component';
import { LIT_DATES_2020 } from 'src/utils/liturgical-dates';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';

describe('LiturgicalDatesComponent', () => {
  let component: LiturgicalDatesComponent;
  let fixture: ComponentFixture<LiturgicalDatesComponent>;
  let liturgicalDates: LiturgicalYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        { provide: AppDateService, useValue: new AppDateService(undefined) },
        AppConfigService,
        LocalizationService,
        LiturgicalYearService
      ]
    });

    fixture = TestBed.createComponent(LiturgicalDatesComponent);
    liturgicalDates = TestBed.inject(LiturgicalYearService);
    liturgicalDates.liturgicalDates = LIT_DATES_2020;

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
