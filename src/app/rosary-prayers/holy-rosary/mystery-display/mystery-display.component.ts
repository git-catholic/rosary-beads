import { Component, Input, OnInit } from '@angular/core';
import { AppConfigService } from '../../../services/app-config.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { REPLACE_WITH_TRANSLATION } from '../../../app.component';

@Component({
  selector: 'app-mystery-display',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './mystery-display.component.html',
  styleUrls: ['./mystery-display.component.scss']
})
export class MysteryDisplayComponent implements OnInit {

  @Input()
  mysteryNumber: string;

  @Input()
  mysteryDesc: string;

  @Input()
  mysteryFruit: string;

  constructor(public appConfig: AppConfigService,
              private translate: TranslateService) { }

  ngOnInit(): void {
    console.log(`displayMystery: name/number=${this.mysteryNumber}, desc=${this.mysteryDesc}, fruit=${this.mysteryFruit}`);
    console.log(`mysteryLiteralLabel (raw): ${this.mysteryLiteralLabel}`);
    console.log(`mysteryFruitDisplay (raw): ${this.mysteryFruitDisplay}`);
  }

  get mysteryLiteralLabel(): string {
    return this.translate.instant('mysteryLiteral');
  }

  get hasFruitDesc(): boolean {
    return REPLACE_WITH_TRANSLATION !== this.translate.instant(this.mysteryFruit);
  }

  get mysteryFruitDisplay(): string {
    return (this.hasFruitDesc)
      ? this.translate.instant(this.mysteryFruit)
      : '';
  }

}
