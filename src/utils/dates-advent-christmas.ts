import { LiturgicalColors } from "src/app/models/liturgical-colors";
import { LiturgicalDates, LiturgicalPeriod, PeriodStatus } from "src/app/models/liturgical-dates";
import { AppDateService } from "src/app/services/app-date.service";
import { LocalizationService } from "src/app/services/localization.service";
import { addDays, Months } from "./key-dates";

export function refreshNeeded(period: LiturgicalPeriod, appDate: AppDateService): PeriodStatus {
  const hasStart = period?.startDate !== undefined;
  const hasEnd = period?.endDate !== undefined;

  if (!hasStart && !hasEnd) {
    return PeriodStatus.MISSING;
  }

  return (hasEnd && period.endDate > appDate.date) || (!hasEnd && period.startDate > appDate.date)
    ? PeriodStatus.INCREMENT_YEAR
    : PeriodStatus.GOOD;

}

export function calculateAdventAndChristmas(appDate: AppDateService, localization: LocalizationService): LiturgicalDates {
  const nextChristmasDay = calculateChristmasFromAppDate(appDate, localization);

  const adventYear = nextChristmasDay.startDate.getFullYear();
  const dowChristmasDay = nextChristmasDay.startDate.getDay();
  const sundayBeforeChristmas = (dowChristmasDay === 0) ? 7 : dowChristmasDay;
  const adventStartsDaysBack = nextChristmasDay.startDate.getDate() - 21 - sundayBeforeChristmas;
  const adventStarts = (adventStartsDaysBack >= 1)
    ? new Date(adventYear, Months.DEC, adventStartsDaysBack)
    : new Date(adventYear, Months.NOV, adventStartsDaysBack + 30);

  return {
    christmas: nextChristmasDay,
    advent: {
      startDate: adventStarts,
      endDate: new Date(adventYear, Months.DEC, 24),
      name: localization.adventLabel,
      color: LiturgicalColors.VIOLET,
      labelId: ':@@adventLabel'
    }
  }
}

function calculateChristmasFromAppDate(appDate: AppDateService, localization: LocalizationService): LiturgicalPeriod {
  let result = calculateChristmasForYear(appDate.currentYear - 1, localization);
  return (appDate.date.getTime() > result.endDate.getTime())
    ? calculateChristmasForYear(appDate.currentYear, localization) : result;
}

function calculateChristmasForYear(year: number, localization: LocalizationService): LiturgicalPeriod {
  let christmasDay = new Date(year, Months.DEC, 25);

  const endOfChristmas = calculateEndOfChristmasSeason(christmasDay);

  return {
    startDate: christmasDay,
    endDate: endOfChristmas,
    name: localization.christmasLabel,
    color: LiturgicalColors.WHITE,
    labelId: ':@@christmasLabel'
  };
}

function calculateEndOfChristmasSeason(christmasDay: Date): Date {
  // TODO: Less certain about how end of Christmas season is determined
  const jan6 = new Date(christmasDay.getFullYear() + 1, Months.JAN, 6);
  const daysInFuture = 7 - jan6.getDay();
  return addDays(jan6, daysInFuture);
}
