import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppDateService } from 'src/app/services/app-date.service';
import { LocalizationService } from 'src/app/services/localization.service';

import { LanguageSelectorComponent } from './language-selector.component';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let activatedRoute: ActivatedRoute;
  let appConfig: AppConfigService;
  let localizationUtil = new LocalizationService();

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    appConfig = new AppConfigService(new AppDateService(activatedRoute), localizationUtil);
    TestBed.configureTestingModule({
      declarations: [ LanguageSelectorComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: AppConfigService, useValue: appConfig }
      ]
    });

    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
