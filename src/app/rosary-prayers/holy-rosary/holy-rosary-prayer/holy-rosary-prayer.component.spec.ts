import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndComponent } from 'src/app/prayers/end/end.component';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppDateService } from 'src/app/services/app-date.service';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { PatsBeadsComponent } from '../../../rosary-beads/pats-beads/pats-beads.component';
import { HolyRosaryPrayerComponent } from './holy-rosary-prayer.component';


describe('HolyRosaryPrayerComponent', () => {
  let component: HolyRosaryPrayerComponent;
  let fixture: ComponentFixture<HolyRosaryPrayerComponent>;
  let localizationUtil = new LocalizationService();
  let beadGroupLoader = new BeadGroupLoaderService(localizationUtil);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HolyRosaryPrayerComponent,
        PatsBeadsComponent,

        EndComponent
      ],
      providers: [
        { provide: AppDateService, useValue: new AppDateService(undefined) },
        LocalizationService,
        AppConfigService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolyRosaryPrayerComponent);
    component = fixture.componentInstance;
    component.activeBeadGroupList = beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.LUMINOUS);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
