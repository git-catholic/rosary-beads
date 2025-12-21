import { addDays, Months } from './key-dates';
import { LiturgicalColors } from "./liturgical-colors";

export class LiturgicalDates {

  constructor(source?: LiturgicalDates) {
    if (source) {
      this.advent = source.advent;
      this.christmas = source.christmas;
      this.lent = source.lent;
      this.triduum = source.triduum;
      this.easter = source.easter;
    }
  }

  advent?: LiturgicalPeriod;

  christmas?: LiturgicalPeriod;

  lent?: LiturgicalPeriod;

  triduum?: LiturgicalPeriod;

  easter?: LiturgicalPeriod;
}

export const LIT_DATES_2020: LiturgicalDates = {
  advent: {
    startDate: new Date(2020, Months.NOV, 29),
    endDate: new Date(2020, Months.DEC, 24),
    name: 'test-advent',
    color: LiturgicalColors.VIOLET,
    labelId: 'adventLabel'
  },
  christmas: {
    startDate: new Date(2020, Months.DEC, 25),
    endDate: new Date(2021, Months.JAN, 10),
    name: 'test-christmas',
    color: LiturgicalColors.WHITE,
    labelId: 'christmasLabel'
  },
  lent: {
    startDate: new Date(2020, Months.FEB, 26),
    endDate: new Date(2020, Months.APR, 9),
    name: 'test-lent',
    color: LiturgicalColors.VIOLET,
    labelId: 'lentLabel'
  },
  triduum: {
    startDate: new Date(2020, Months.APR, 9),
    endDate: new Date(2020, Months.APR, 12),
    name: 'test-triduum',
    color: LiturgicalColors.RED,
    labelId: 'triduumLabel'
  },
  easter: {
    startDate: new Date(2020, Months.APR, 12),
    endDate: new Date(2020, Months.MAY, 31),
    name: 'test-easter',
    color: LiturgicalColors.WHITE,
    labelId: 'easterLabel'
  }
};

export const LIT_DATES_2021: LiturgicalDates = {
  advent: {
    startDate: new Date(2021, Months.NOV, 28),
    endDate: new Date(2021, Months.DEC, 24),
    name: 'test-advent',
    color: LiturgicalColors.VIOLET,
    labelId: 'adventLabel'
  },
  christmas: {
    startDate: new Date(2021, Months.DEC, 25),
    endDate: new Date(2022, Months.JAN, 9),
    name: 'test-christmas',
    color: LiturgicalColors.WHITE,
    labelId: 'christmasLabel'
  },
  lent: {
    startDate: new Date(2021, Months.FEB, 17),
    endDate: new Date(2021, Months.APR, 1),
    name: 'test-lent',
    color: LiturgicalColors.VIOLET,
    labelId: 'lentLabel'
  },
  triduum: {
    startDate: new Date(2021, Months.APR, 1),
    endDate: new Date(2021, Months.APR, 4),
    name: 'test-triduum',
    color: LiturgicalColors.RED,
    labelId: 'triduumLabel'
  },
  easter: {
    startDate: new Date(2021, Months.APR, 4),
    endDate: new Date(2021, Months.MAY, 23),
    name: 'test-easter',
    color: LiturgicalColors.WHITE,
    labelId: 'easterLabel'
  }
};

export const LIT_YEAR_2020_2021: LiturgicalDates = {
  advent: LIT_DATES_2020.advent,
  christmas: LIT_DATES_2020.christmas,
  lent: LIT_DATES_2021.lent,
  triduum: LIT_DATES_2021.triduum,
  easter: LIT_DATES_2021.easter
};

export function earliestDate(liturgicalDates: LiturgicalDates): Date {
  let workingDate = liturgicalDates.advent.startDate;
  if (workingDate.getTime() > liturgicalDates.christmas.startDate.getTime()) {
    workingDate = liturgicalDates.christmas.startDate;
  }
  if (workingDate.getTime() > liturgicalDates.lent.startDate.getTime()) {
    workingDate = liturgicalDates.lent.startDate;
  }
  if (workingDate.getTime() > liturgicalDates.triduum.startDate.getTime()) {
    workingDate = liturgicalDates.triduum.startDate;
  }
  if (workingDate.getTime() > liturgicalDates.easter.startDate.getTime()) {
    workingDate = liturgicalDates.easter.startDate;
  }
  return addDays(workingDate, 0);
}

export interface LiturgicalPeriod {
  startDate?: Date;
  endDate?: Date;
  /* @deprecated */
  name?: string;
  color: LiturgicalColors;
  labelId: string;
}

export enum PeriodStatus {
  GOOD,
  MISSING,
  INCREMENT_YEAR
}

export const automaticSelection: LiturgicalPeriod = {
  color: undefined,
  labelId: 'selectPeriodAutomatic'
}

export const ordinaryTime: LiturgicalPeriod = {
  color: LiturgicalColors.GREEN,
  labelId: 'selectOrdinaryTime'
}
