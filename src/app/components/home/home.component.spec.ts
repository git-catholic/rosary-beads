// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { AppComponent } from 'src/app/app.component';
// import { HolyRosaryHomeComponent } from 'src/app/rosary-prayers/holy-rosary/holy-rosary-home.component';
// import { MysterySelectorComponent } from 'src/app/rosary-prayers/holy-rosary/mystery-selector/mystery-selector.component';
// import { AppConfigService } from 'src/app/services/app-config.service';
// import { AppDateService } from 'src/app/services/app-date.service';
// import { LocalizationService } from 'src/app/services/localization.service';
// import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';
// import { LiturgicalDatesComponent } from '../liturgical-dates/liturgical-dates.component';
// import { NoticesComponent } from '../notices/notices.component';
// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;
//   let activatedRoute: ActivatedRoute;
//   let appConfig: AppConfigService;
//   let localizationUtil = new LocalizationService();
//   let languages: SupportedLanguagesService;

//   beforeEach(() => {
//     activatedRoute = new ActivatedRoute();
//     appConfig = new AppConfigService(new AppDateService(activatedRoute), localizationUtil);
//     languages = new SupportedLanguagesService(appConfig);

//     TestBed.configureTestingModule({
//       declarations: [
//         HomeComponent,

//         HolyRosaryHomeComponent,
//         LiturgicalDatesComponent,
//         MysterySelectorComponent,
//         NoticesComponent
//       ],
//       providers: [
//         { provide: ActivatedRoute, useValue: activatedRoute },
//         { provide: AppConfigService, useValue: appConfig },
//         { provide: SupportedLanguagesService, useValue: languages }
//       ]
//     });

//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
