// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { AppConfigService } from 'src/app/services/app-config.service';
// import { AppDateService } from 'src/app/services/app-date.service';
// import { LocalizationService } from 'src/app/services/localization.service';

// import { LanguageRedirectComponent } from './language-redirect.component';

// fdescribe('LanguageRedirectComponent', () => {
//   let component: LanguageRedirectComponent;
//   let fixture: ComponentFixture<LanguageRedirectComponent>;
//   let activatedRoute: ActivatedRoute;
//   let appConfig: AppConfigService;
//   let localizationUtil = new LocalizationService();

//   beforeEach(() => {
//     activatedRoute = new ActivatedRoute();
//     appConfig = new AppConfigService(new AppDateService(activatedRoute), localizationUtil);
//     TestBed.configureTestingModule({
//       declarations: [ LanguageRedirectComponent ],
//       providers: [
//         { provide: ActivatedRoute, useValue: activatedRoute },
//         { provide: AppConfigService, useValue: appConfig }
//       ]
//     });

//     fixture = TestBed.createComponent(LanguageRedirectComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
