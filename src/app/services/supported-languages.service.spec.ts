import { TestBed } from '@angular/core/testing';

import { SupportedLanguagesService } from './supported-languages.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RosaryTranslateModule } from '../modules/rosary-translate.module';
import { testRoutes } from '../utils-for-test/routes-for-testing.spec';

describe('SupportedLanguagesService', () => {
  let service: SupportedLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(testRoutes)
      ]
    });
    service = TestBed.inject(SupportedLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
