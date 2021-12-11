import { Injectable } from '@angular/core';
import { calculateAdventAndChristmas, refreshNeeded } from 'src/utils/dates-advent-christmas';
import { calculateLentAndEaster } from 'src/utils/dates-lent-easter';
import { addDays, Months } from 'src/utils/key-dates';
import { LiturgicalColors } from '../models/liturgical-colors';
import { LiturgicalDates, LiturgicalPeriod, PeriodStatus } from '../models/liturgical-dates';
import { AppDateService } from './app-date.service';
import { LocalizationService } from './localization.service';

@Injectable({
  providedIn: 'root'
})
export class LiturgicalYearService {

  liturgicalDates: LiturgicalDates;

  adventSunday3: Date;
  allSaintsDay: Date;
  lentSunday4: Date;
  palmSunday: Date;
  pentacostSunday: Date;

  overrideLiturgicalColor: LiturgicalColors;

  constructor(public appDate: AppDateService,
              private localization: LocalizationService) {
    this.validateDates();
  }

  liturgicalColor(): LiturgicalColors {

    const appDateTime = this.appDate.date.getTime();

    if (this.overrideLiturgicalColor) {
      return this.overrideLiturgicalColor;
    }

    if ((this.isDateInRangeOfTriduum
      || appDateTime === this.palmSunday.getTime()
      || appDateTime === this.pentacostSunday.getTime())
      && appDateTime !== this.liturgicalDates.easter.startDate.getTime()) {
        return LiturgicalColors.RED;
    }
    else if (appDateTime === this.adventSunday3.getTime()
      || appDateTime === this.lentSunday4.getTime()) {
        return LiturgicalColors.ROSE;
    }
    else if (this.isDateInRangeOfChristmas
      || this.isDateInRangeOfEaster
      || appDateTime === this.allSaintsDay.getTime()) {
        return LiturgicalColors.WHITE;
    }
    else if (this.isDateInRangeOfAdvent
      || this.isDateInRangeOfLent) {
        return LiturgicalColors.VIOLET;
    }

    return LiturgicalColors.GREEN;
  }

  get isAshWednesday(): boolean {
    return this.appDate.date.getTime() === this.liturgicalDates.lent.startDate.getTime();
  }

  get isDateInRangeOfAdvent(): boolean {
    return this.dateInRange(this.liturgicalDates.advent);
  }

  get isDateInRangeOfChristmas(): boolean {
    return this.dateInRange(this.liturgicalDates.christmas);
  }

  get isDateInRangeOfEaster(): boolean {
    return this.dateInRange(this.liturgicalDates.easter);
  }

  get isDateInRangeOfLent(): boolean {
    return this.dateInRange(this.liturgicalDates.lent);
  }

  get isDateInRangeOfTriduum(): boolean {
    return this.dateInRange(this.liturgicalDates.triduum);
  }

  validateDates() {
    this.liturgicalDates = undefined;

    this.refreshLiturgicalDates();

    this.allSaintsDay = new Date(this.appDate.currentYear, Months.NOV, 1);
    this.pentacostSunday = this.liturgicalDates.easter.endDate;
    this.adventSunday3 = addDays(this.liturgicalDates.advent.startDate, 14);
    this.lentSunday4 = addDays(this.liturgicalDates.lent.startDate, 25);
    this.palmSunday = addDays(this.liturgicalDates.easter.startDate, -7);
  }

  dateInRange(period: LiturgicalPeriod): boolean {
    return period.startDate.getTime() <= this.appDate.date.getTime()
      && this.appDate.date.getTime() <= period.endDate.getTime();
  }

  private refreshLiturgicalDates() {
    let workingCopy: LiturgicalDates = new LiturgicalDates(this.liturgicalDates);

    this.refreshAdventAndChristmas(workingCopy);
    this.refreshLentAndEaster(workingCopy);

    this.liturgicalDates = workingCopy;
  }

  private refreshAdventAndChristmas(workingCopy: LiturgicalDates) {
    const adventStatus = refreshNeeded(workingCopy?.advent, this.appDate);
    const christmasStatus = refreshNeeded(workingCopy?.christmas, this.appDate);

    if (PeriodStatus.GOOD !== adventStatus || PeriodStatus.GOOD !== christmasStatus) {
      const updatedAdventChristmas = calculateAdventAndChristmas(this.appDate, this.localization)
      workingCopy.christmas = updatedAdventChristmas.christmas;
      workingCopy.advent = updatedAdventChristmas.advent;
    }
  }

  private refreshLentAndEaster(workingCopy: LiturgicalDates) {
    const lentStatus = refreshNeeded(workingCopy?.lent, this.appDate);
    const triduumStatus = refreshNeeded(workingCopy?.triduum, this.appDate);
    const easterStatus = refreshNeeded(workingCopy?.easter, this.appDate);

    if (PeriodStatus.GOOD !== lentStatus || PeriodStatus.GOOD !== triduumStatus || PeriodStatus.GOOD !== easterStatus) {
      const updatedLentEaster = calculateLentAndEaster(this.appDate, this.localization);
      workingCopy.lent = updatedLentEaster.lent;
      workingCopy.easter = updatedLentEaster.easter;
      workingCopy.triduum = updatedLentEaster.triduum;
    }
  }

}
