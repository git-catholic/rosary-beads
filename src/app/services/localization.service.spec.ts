import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppDateService } from './app-date.service';

import { LocalizationService } from './localization.service';

describe('DateAndLocalizationService', () => {
  let service: LocalizationService;
  let activatedRoute: ActivatedRoute;
  let appDate: AppDateService;

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    appDate = new AppDateService(activatedRoute);

    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: AppDateService, useValue: appDate }
      ]
    });
    service = TestBed.inject(LocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
