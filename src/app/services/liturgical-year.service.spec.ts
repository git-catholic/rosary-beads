import { TestBed } from '@angular/core/testing';
import { addDays, LIT_DATES_2020, LIT_DATES_2021, LIT_YEAR_2020_2021, Months } from 'src/utils/key-dates';
import { earliestDate, LiturgicalDates, LiturgicalPeriod } from '../models/liturgical-dates';
import { AppDateService } from './app-date.service';
import { LocalizationService } from './localization.service';

import { LiturgicalYearService } from './liturgical-year.service';
import { ActivatedRoute } from '@angular/router';
import { liturgicalTestData } from './liturgical-test-data';

describe('LiturgicalYearService', () => {
  let service: LiturgicalYearService;
  let activatedRoute: ActivatedRoute;
  let appDate: AppDateService;
  let localization: LocalizationService;

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    appDate = new AppDateService(activatedRoute);

    TestBed.configureTestingModule({
      providers: [
        { provide: AppDateService, useValue: appDate }
      ]
    });
    localization = TestBed.inject(LocalizationService);
    service = TestBed.inject(LiturgicalYearService);
  });

  it('should match expected results for 2020', () => {
    const fakeNow = addDays(earliestDate(LIT_DATES_2020), 0);
    appDate = new AppDateServiceForTest(activatedRoute, fakeNow);
    service = new LiturgicalYearService(appDate, localization);
    expect(service).toBeTruthy();
    expect(service.liturgicalDates).toBeTruthy();
    expectLiturgicalDatesToMatch(service.liturgicalDates, LIT_DATES_2020);
  });

  it('should match expected results for 2021', () => {
    const fakeNow = addDays(earliestDate(LIT_DATES_2021), 0);
    appDate = new AppDateServiceForTest(activatedRoute, fakeNow);
    service = new LiturgicalYearService(appDate, localization);
    expect(service).toBeTruthy();
    expect(service.liturgicalDates).toBeTruthy();
    expectLiturgicalDatesToMatch(service.liturgicalDates, LIT_DATES_2021);
  });

  it('should match expected results for liturgical year 2020/2021', () => {
    const fakeNow = new Date(2020, Months.NOV, 27);
    appDate = new AppDateServiceForTest(activatedRoute, fakeNow);
    service = new LiturgicalYearService(appDate, localization);
    expect(service).toBeTruthy();
    expect(service.liturgicalDates).toBeTruthy();
    expectLiturgicalDatesToMatch(service.liturgicalDates, LIT_YEAR_2020_2021);
  });

  liturgicalTestData.forEach(liturgicalEntry => {
    it(`should return ${liturgicalEntry.expectedColor} as the liturgical color for ${liturgicalEntry.dateForTest}`, () => {
      appDate = new AppDateServiceForTest(activatedRoute, liturgicalEntry.dateForTest);
      service = new LiturgicalYearService(appDate, localization);

      expect(service).toBeTruthy();
      expect(service.liturgicalColor()).toEqual(liturgicalEntry.expectedColor);
      expect(service.isDateInRangeOfAdvent).toEqual(liturgicalEntry.expectAdvent || false);
      expect(service.isDateInRangeOfChristmas).toEqual(liturgicalEntry.expectChristmas || false);
      expect(service.isDateInRangeOfLent).toEqual(liturgicalEntry.expectLent || false);
      expect(service.isDateInRangeOfTriduum).toEqual(liturgicalEntry.expectTriduum || false);
      expect(service.isDateInRangeOfEaster).toEqual(liturgicalEntry.expectEaster || false);
      expect(service.isAshWednesday).toEqual(liturgicalEntry.isAshWednesday || false);
      expect(service.palmSunday.getTime() === appDate.date.getTime()).toEqual(liturgicalEntry.isPalmSunday || false);
      expect(service.pentacostSunday.getTime() === appDate.date.getTime()).toEqual(liturgicalEntry.isPentacostSunday || false);
    });
  });
});

function expectLiturgicalDatesToMatch(date1: LiturgicalDates, date2: LiturgicalDates) {
  expectLiturgicalPeriodsToMatch(date1.advent, date2.advent);
  expectLiturgicalPeriodsToMatch(date1.christmas, date2.christmas);
  expectLiturgicalPeriodsToMatch(date1.easter, date2.easter);
  expectLiturgicalPeriodsToMatch(date1.lent, date2.lent);
  expectLiturgicalPeriodsToMatch(date1.triduum, date2.triduum);
}

function expectLiturgicalPeriodsToMatch(period1: LiturgicalPeriod, period2: LiturgicalPeriod) {
  expect(period1.startDate).toEqual(period2.startDate);
  expect(period1.endDate).toEqual(period2.endDate);
}

class AppDateServiceForTest extends AppDateService {

  constructor(activatedRoute: ActivatedRoute, date?: Date) {
    super(activatedRoute);
    this.updateDate(date);
  }

}
