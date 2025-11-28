// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { PatsBeadsComponent } from '../../../rosary-beads/pats-beads/pats-beads.component';
// import it from '@angular/common/locales/it';
// import { describe, beforeEach } from 'node:test';
// import { AppConfigService } from '../../../services/app-config.service';
// import { AppDateService } from '../../../services/app-date.service';
// import { LocalizationService } from '../../../services/localization.service';
// import { RosaryMysteriesEnum } from '../rosary-helper';
// import { HolyRosaryDisplayComponent } from './holy-rosary-display.component';


// describe('HolyRosaryPrayerComponent', () => {
//   let component: HolyRosaryDisplayComponent;
//   let fixture: ComponentFixture<HolyRosaryDisplayComponent>;
//   let localizationUtil = new LocalizationService();
//   let beadGroupLoader = new BeadGroupLoaderService(localizationUtil);

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         HolyRosaryPrayerComponent,
//         PatsBeadsComponent,

//         EndComponent
//       ],
//       providers: [
//         { provide: AppDateService, useValue: new AppDateService(undefined) },
//         LocalizationService,
//         AppConfigService
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(HolyRosaryDisplayComponent);
//     component = fixture.componentInstance;
//     component.activeBeadGroupList = beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.LUMINOUS);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
