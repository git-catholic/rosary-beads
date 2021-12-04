import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { BeadGroupList } from 'src/app/models/bead-group-list';
import { EndComponent } from 'src/app/prayers/end/end.component';
import { RosaryMysteriesEnum } from 'src/app/sequences/rosary-helper';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppDateService } from 'src/app/services/app-date.service';
import { BeadGroupLoaderService } from 'src/app/services/bead-group-loader.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { HolyRosaryPrayerComponent } from '../../rosary-prayers/holy-rosary/holy-rosary-prayer/holy-rosary-prayer.component';
import { PatsBeadsComponent } from '../../rosary-beads/pats-beads/pats-beads.component';
import { ActivePrayerComponent } from './active-prayer.component';
import { SoundService } from 'src/app/services/sound.service';

describe('ActivePrayerComponent', () => {
  let component: ActivePrayerComponent;
  let fixture: ComponentFixture<ActivePrayerComponent>;
  let localizationUtil = new LocalizationService();
  let soundService: SoundService;
  let beadGroupLoader = new BeadGroupLoaderService(localizationUtil);
  let holyRosaryPrayer: HolyRosaryPrayerComponent;

  beforeEach(() => {
    soundService = new SoundService();
    holyRosaryPrayer = new HolyRosaryPrayerComponent(soundService);
    holyRosaryPrayer.activeBeadGroupList = beadGroupLoader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.GLORIOUS);
    holyRosaryPrayer.prayerName = 'test-active-prayer';

    TestBed.configureTestingModule({
      declarations: [
        ActivePrayerComponent,
        HolyRosaryPrayerComponent,
        PatsBeadsComponent,
        EndComponent
      ],
      providers: [
        { provide: AppDateService, useValue: new AppDateService(undefined) },
        LocalizationService,
        AppConfigService,
        AppComponent,
        { provide: HolyRosaryPrayerComponent, useValue: holyRosaryPrayer },
        { provide: BeadGroupList, useValue: holyRosaryPrayer.activeBeadGroupList }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePrayerComponent);
    component = fixture.componentInstance;
    component.holyRosaryPrayer = holyRosaryPrayer;
    component.activeBeadGroupList = holyRosaryPrayer.activeBeadGroupList;
    console.log(`src: ${holyRosaryPrayer.prayerName}`);
    console.log(`component: ${component.prayerName}`);
    fixture.detectChanges();
    console.log(`after detect changes`);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
