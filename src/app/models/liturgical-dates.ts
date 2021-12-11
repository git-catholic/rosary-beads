import { addDays } from "src/utils/key-dates";
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
  name: $localize`:@@:Automatic`,
  color: undefined,
  labelId: ':@@selectPeriodAutomatic'
}

export const ordinaryTime: LiturgicalPeriod = {
  name: $localize`:@@:Ordinary Time`,
  color: LiturgicalColors.GREEN,
  labelId: ':@@selectOrdinaryTime'
}
