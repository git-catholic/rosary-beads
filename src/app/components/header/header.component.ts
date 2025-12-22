import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageItem, LanguageSelectorComponent } from "../config/language-selector/language-selector.component";
import { SupportedLanguagesService } from '../../services/supported-languages.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  prayerName: string;

  @Input()
  isPrayerSequenceDone: boolean;

  @Output()
  onEnableNavigationEvent = new EventEmitter<boolean>();

  @Output()
  onConfigViewEvent = new EventEmitter<string>();

  @ViewChild('navEnabledChkbox')
  navEnabledChkbox: ElementRef;

  readonly languageSelectorList: LanguageItem[];

  constructor(private appConfig: AppConfigService,
              private supportedLanguagesService: SupportedLanguagesService,
              private router: Router) {

    this.languageSelectorList = this.supportedLanguagesService.getLanguageSelectorList();
  }

  ngOnInit(): void { }

  get isPortrait(): boolean {
    return this.appConfig?.isPortrait;
  }

  onStartNew() {
    console.log(`onStartNew`);
    this.router.navigate(['']);
  }

  onEnableNavigation(): void {
    console.log(`header nav flag: ${this.navEnabledChkbox?.nativeElement?.checked}`);
    this.onEnableNavigationEvent.emit(this.navEnabledChkbox?.nativeElement?.checked);
  }

  onConfigView(): void {
    this.onConfigViewEvent.emit('header');
  }

  onLanguageSelectionChange(code: string) {
    this.supportedLanguagesService.assignActiveLanguageIdFromCode(code);
  }

}
