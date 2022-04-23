import { LiturgicalColors } from "src/app/models/liturgical-colors";
import { LiturgicalDates } from "src/app/models/liturgical-dates";
import { AppDateService } from "src/app/services/app-date.service";
import { LocalizationService } from "src/app/services/localization.service";
import { addDays, Months } from "./key-dates";

/**
 * References:
 * https://www.geeksforgeeks.org/how-to-calculate-the-easter-date-for-a-given-year-using-gauss-algorithm/
 * https://www.usccb.org/prayer-worship/liturgical-year/lent
 * https://www.usccb.org/prayer-worship/liturgical-year/triduum
 * https://www.usccb.org/prayer-worship/liturgical-year/easter
 *
 * @param year
 */
export function gaussEaster(year: number): Date {
  const a = year % 19;
  const b = year % 4;
  const c = year % 7;

  const p = Math.floor(year / 100);
  const q = Math.floor((13 + 8 * p) / 25);

  const m = Math.floor(15 - q + p - p / 4) % 30;
  const n = Math.floor(4 + p - p / 4) % 7;
  const d = Math.floor(19 * a + m) % 30;
  const e = Math.floor(2 * b + 4 * c + 6 * d + n) % 7;

  const days = Math.floor(22 + d + e);

  if (d == 29 && e == 6) {
    return new Date(year, Months.APR, 19);
  }
  else if (d == 28 && e == 6) {
    return new Date(year, Months.APR, 18);
  }

  return (days > 31)
    ? new Date(year, Months.APR, days - 31)
    : new Date(year, Months.MAR, days);
}

export function calculateLentAndEaster(appDate: AppDateService, localization: LocalizationService): LiturgicalDates {
  let easterDay = gaussEaster(appDate.currentYear);
  let endEaster = calculateEndOfEasterSeason(easterDay);

  if (appDate.date > endEaster) {
    easterDay = gaussEaster(appDate.currentYear + 1);
    endEaster = calculateEndOfEasterSeason(easterDay);
  }


  const lentEnds = addDays(easterDay, -3);
  const lentStarts = addDays(lentEnds, -43);

  return {
    lent: {
      startDate: lentStarts,
      endDate: lentEnds,
      name: localization.lentLabel,
      color: LiturgicalColors.VIOLET,
      labelId: ':@@lentLabel'
    },
    triduum: {
      startDate: lentEnds,
      endDate: easterDay,
      name: localization.triduumLabel,
      color: LiturgicalColors.RED,
      labelId: ':@@triduumLabel'
    },
    easter: {
      startDate: easterDay,
      endDate: endEaster,
      name: localization.easterLabel,
      color: LiturgicalColors.WHITE,
      labelId: ':@@easterLabel'
    }
  }
}

function calculateEndOfEasterSeason(easterDay: Date): Date {
  return addDays(easterDay, 49);
}
