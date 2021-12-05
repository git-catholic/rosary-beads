import { Injectable } from '@angular/core';
import { calculateAdventAndChristmas, refreshNeeded } from 'src/utils/dates-advent-christmas';
import { calculateLentAndEaster } from 'src/utils/dates-lent-easter';
import { Months } from 'src/utils/key-dates';
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

  constructor(private readonly appDate: AppDateService,
              private localization: LocalizationService) {
    this.validateDates();
  }

  liturgicalColor(): LiturgicalColors {

    if (this.overrideLiturgicalColor) {
      return this.overrideLiturgicalColor;
    }

    if ((this.isDateInRangeOfTriduum
      || this.appDate.date === this.palmSunday
      || this.appDate.date === this.pentacostSunday)
      && this.appDate.date !== this.liturgicalDates.easter.startDate) {
        return LiturgicalColors.RED;
    }
    else if (this.appDate.date === this.adventSunday3
      || this.appDate.date === this.lentSunday4) {
        return LiturgicalColors.ROSE;
    }
    else if (this.isDateInRangeOfChristmas
      || this.isDateInRangeOfEaster
      || this.appDate.date === this.allSaintsDay) {
        return LiturgicalColors.WHITE;
    }
    else if (this.isDateInRangeOfAdvent
      || this.isDateInRangeOfLent) {
        return LiturgicalColors.VIOLET;
    }

    return LiturgicalColors.GREEN;
  }

  get isAshWednesday(): boolean {
    return this.appDate.date === this.liturgicalDates.lent.startDate;
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
    this.liturgicalDates = undefined;   //this.stateStorage.liturgicalDates.data;

    this.refreshLiturgicalDates();

    this.allSaintsDay = new Date(this.appDate.currentYear, Months.NOV, 1);
    this.pentacostSunday = this.liturgicalDates.easter.endDate;

    let workingDate = new Date(this.liturgicalDates.advent.startDate);
    workingDate.setDate(workingDate.getDate() + 14);
    this.adventSunday3 = workingDate;

    workingDate = new Date(this.liturgicalDates.lent.startDate);
    workingDate.setDate(workingDate.getDate() + 25);
    this.lentSunday4 = workingDate;

    workingDate = new Date(this.liturgicalDates.easter.startDate);
    workingDate.setDate(workingDate.getDate() - 7);
    this.palmSunday = workingDate;
  }

  dateInRange(period: LiturgicalPeriod): boolean {
    return period.startDate <= this.appDate.date && this.appDate.date <= period.endDate;
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
