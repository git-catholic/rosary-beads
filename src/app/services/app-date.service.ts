import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppDateService {
  // tslint:disable-next-line:variable-name
  private _date: Date;
  // tslint:disable-next-line:variable-name
  private _currentYear;

  constructor(private activateRoute?: ActivatedRoute) {
    if (activateRoute?.queryParams) {
      this.activateRoute.queryParams.subscribe(params => {
        if ('use-date' in params) {
          const value = params['use-date'];
          const useDate = new Date(value);
          this.updateDate(this.addDays(useDate, 1));
        }
      });
    }
    this.updateDate(new Date());
  }

  get date(): Date {
    return this._date;
  }

  get currentYear(): number {
    return this._currentYear;
  }

  normalizeStringDate(source: string): Date {
    return (source) ? this.normalizeDate(new Date(source)) : undefined;
  }

  normalizeDate(source: Date): Date {
    const xformDate = new Date(source);
    return new Date(xformDate.getFullYear(), xformDate.getMonth(), xformDate.getDate());
  }

  addDays(source: Date, adjustDays: number): Date {
    return new Date(source.getFullYear(), source.getMonth(), source.getDate() + adjustDays);
  }

  protected updateDate(date: Date): void {
    const baseDate = (date) ? this.normalizeDate(date) : this.normalizeDate(new Date());
    this._currentYear = baseDate.getFullYear();
    this._date = new Date(this._currentYear, baseDate.getMonth(), baseDate.getDate());
  }
}
