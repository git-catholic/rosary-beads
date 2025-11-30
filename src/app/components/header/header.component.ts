import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule ],
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

  constructor(private appConfig: AppConfigService,
              private router: Router) { }

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
}
