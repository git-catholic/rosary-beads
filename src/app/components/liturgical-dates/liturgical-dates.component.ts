import { Component, Input, OnInit } from '@angular/core';
import { LiturgicalPeriod, automaticSelection, ordinaryTime } from '../../models/liturgical-dates';
import { LiturgicalYearService } from '../../services/liturgical-year.service';
import { LocalizationService } from '../../services/localization.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liturgical-dates',
  imports: [CommonModule],
  templateUrl: './liturgical-dates.component.html',
  styleUrls: ['./liturgical-dates.component.scss'],
  standalone: true
})
export class LiturgicalDatesComponent implements OnInit {

  @Input()
  hideSelector: boolean;

  periods: LiturgicalPeriod[];
  periodsLeft: LiturgicalPeriod[];
  periodsRight: LiturgicalPeriod[];

  litYearColorSelector: LiturgicalPeriod[];

  constructor(private liturgicalYear: LiturgicalYearService,
              private localizationUtil: LocalizationService) { }

  ngOnInit(): void {
    const liturgicalDates = this.liturgicalYear?.liturgicalDates;

    let periods = [
      liturgicalDates.advent,
      liturgicalDates.christmas,
      liturgicalDates.lent,
      liturgicalDates.triduum,
      liturgicalDates.easter
    ]

    periods.sort((period1: LiturgicalPeriod, period2: LiturgicalPeriod) => {
      return period1.startDate < period2.startDate ? -1 : 1;
    });

    this.periodsLeft = [
      periods[0], periods[1], periods[2]
    ];

    this.periodsRight = [
      periods[3], periods[4]
    ];

    this.periods = periods;

    this.litYearColorSelector = [
      automaticSelection,
      ordinaryTime,
      ...periods
    ]
  }

  liturgicalPeriodLabel(): string {
    return this.localizationUtil?.liturgicalPeriod;
  }

  get showSelector(): boolean {
    return this.hideSelector !== true;
  }

  labelFromId(labelId: string): string {
    if ('adventLabel' === labelId) {
      return this.localizationUtil.adventLabel;
    }
    else if ('christmasLabel' === labelId) {
      return this.localizationUtil.christmasLabel;
    }
    else if ('lentLabel' === labelId) {
      return this.localizationUtil.lentLabel;
    }
    else if ('triduumLabel' === labelId) {
      return this.localizationUtil.triduumLabel;
    }
    else if ('easterLabel' === labelId) {
      return this.localizationUtil.easterLabel;
    }
    return labelId;
  }

  onLiturgicalPeriodChanged(event: any): void {
    const newValue = event?.target?.value;
    const idx = Number.parseInt(newValue);
    if (idx === 0) {
      this.liturgicalYear.overrideLiturgicalColor = undefined;
    }
    else if (idx >= 1 && idx < this.litYearColorSelector.length) {
      this.liturgicalYear.overrideLiturgicalColor = this.litYearColorSelector[idx].color;
    }
  }
}
