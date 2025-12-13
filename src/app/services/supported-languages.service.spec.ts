// import { TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { AppConfigService } from './app-config.service';
// import { AppDateService } from './app-date.service';

// import { SupportedLanguagesService } from './supported-languages.service';
// import { LocalizationService } from './localization.service';
// import { TranslateService } from '@ngx-translate/core';

// describe('SupportedLanguagesService', () => {
//   let service: SupportedLanguagesService;
//   let activatedRoute: ActivatedRoute;
//   let appConfig: AppConfigService;
//   let translate: TranslateService;
//   let localizationUtil: LocalizationService;

//   beforeEach(() => {
//     activatedRoute = new ActivatedRoute();
//     jest.mock('@ngx-translate/core');
//     appConfig = new AppConfigService(new AppDateService(activatedRoute), localizationUtil);
//     TestBed.configureTestingModule({
//       providers: [
//         { provide: ActivatedRoute, useValue: activatedRoute },
//         { provide: AppConfigService, useValue: appConfig },
//         TranslateService
//       ]
//     });
//     service = TestBed.inject(SupportedLanguagesService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
