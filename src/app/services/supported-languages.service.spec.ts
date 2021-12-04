import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { AppDateService } from './app-date.service';
import { LocalizationService } from './localization.service';

import { SupportedLanguagesService } from './supported-languages.service';

describe('SupportedLanguagesService', () => {
  let service: SupportedLanguagesService;
  let activatedRoute: ActivatedRoute;
  let appConfig: AppConfigService;
  let localizationUtil = new LocalizationService();

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    appConfig = new AppConfigService(new AppDateService(activatedRoute), localizationUtil);
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: AppConfigService, useValue: appConfig }
      ]
    });
    service = TestBed.inject(SupportedLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
