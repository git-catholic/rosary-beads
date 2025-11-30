import { LiturgicalColors } from "./liturgical-colors";

export enum Months {
  JAN = 0,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC
}

export function addDays(baseDate: Date, days: number): Date {
  const workingDate = new Date(baseDate);
  workingDate.setDate(workingDate.getDate() + days);
  return workingDate;
}

