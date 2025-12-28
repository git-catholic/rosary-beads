import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { AppDateService } from './app-date.service';

import { LocalizationService } from './localization.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RosaryTranslateModule } from '../modules/rosary-translate.module';
import { testRoutes } from '../utils-for-test/routes-for-testing.spec';

describe('LocalizationService', () => {
  let service: LocalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(testRoutes)
      ]
    })
    .compileComponents();

    service = TestBed.inject(LocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
