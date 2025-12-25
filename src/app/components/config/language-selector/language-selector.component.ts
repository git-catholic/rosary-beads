import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export interface LanguageItem {
  displayValue: string;
  value: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  @Input()
  items?: LanguageItem[];

  @Output()
  languageSelectionChangeEvent = new EventEmitter<string>();

  selectedValue: string;

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    //console.log(`current lang: ${this.translate.getCurrentLang()}`);
    const activeCode = this.translate.getCurrentLang();
    const displayArray = this.items.filter(entry => entry.value === activeCode)
      .map(entry => entry.displayValue);
    this.selectedValue = displayArray[0];
  }
  
  onLanguageSelectionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.languageSelectionChangeEvent.emit(value);
  }

  isSelectedLanguage(entry: LanguageItem): boolean {
    return entry?.displayValue === this.selectedValue;
  }
}
