import { TranslateService } from "@ngx-translate/core";
import { PatsBeadsComponent } from "../rosary-beads/pats-beads/pats-beads.component";
import { RosaryBeads } from "../rosary-beads/rosary-beads";
import { MysteryGlorious } from "./holy-rosary/mystery-glorious";
import { PrayerHolyRosary } from "./holy-rosary/prayer-holy-rosary";
import { PrayerSequence } from "./prayer-sequence";
import { Sequence } from "./sequence";
import { EventEmitter } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { RosaryTranslateModule } from "../modules/rosary-translate.module";
import { AppConfigService } from "../services/app-config.service";
import { AppDateService } from "../services/app-date.service";
import { LocalizationService } from "../services/localization.service";
import { PrayerFactoryService } from "../services/prayer-factory.service";
import { RosaryMysteriesEnum } from "../utils/rosary-mysteries-enum";

describe('PrayerSequence', () => {

  describe('PrayerHolyRosary and PatsBeadsComponent integration', () => {
    let prayerCount = 0;
    let beadSequence: RosaryBeads;
    let prayerSequence: PrayerSequence;
    let translate: TranslateService;
    let activeBeadsEvent: EventEmitter<any>;

    const expectedPrayerCount = 82;
    const expectedBeadCount = 80;

    beforeEach(() => {
      // beadSequence = new PatsBeadsComponent();
      // prayerSequence = new PrayerHolyRosary(new MysteryGlorious(), beadSequence);
      activeBeadsEvent = new EventEmitter<any>();

      TestBed.configureTestingModule({
        imports: [
          PatsBeadsComponent,
          RosaryTranslateModule
        ],
        providers: [
          { provide: AppDateService, useValue: new AppDateService(undefined) },
          { provide: 'activeBeadsEvent', useValue: activeBeadsEvent },
          TranslateService,
          LocalizationService,
          AppConfigService,
          PrayerFactoryService
        ]
      });

      translate = TestBed.inject(TranslateService);
      translate.use('en');

      const prayerFactoryService = TestBed.inject(PrayerFactoryService);
      const activeMysteries = prayerFactoryService.newPrayerMystery(RosaryMysteriesEnum.GLORIOUS);
      const fixture = TestBed.createComponent(PatsBeadsComponent); //prayerFactoryService.newRosaryPrayer(activeMysteries, undefined);
      beadSequence = fixture.componentInstance;
      prayerSequence = prayerFactoryService.newRosaryPrayer(activeMysteries, beadSequence);
    });

    it('should keep in sync between beads and prayers', () => {
      // given
      expect(prayerSequence.currentIndex).toEqual(0);
      expect(beadSequence.currentIndex).toEqual(0);
      expect(prayerSequence.totalPrayerCount).toEqual(expectedPrayerCount);

      // when (start)
      let prayer = prayerSequence.start();

      // then (start)
      expect(prayer).toBeTruthy();
      expect(prayerSequence.currentIndex).toEqual(0);
      expect(beadSequence.currentIndex).toEqual(0);

      while (prayerSequence.hasNext()) {
        // when (iterate)
        prayer = prayerSequence.next();
        prayerCount++;

        // then (iterate)
        expect(prayer)
          .withContext(`prayerCount: ${prayerCount}`)
          .toBeTruthy();
        expect(prayerSequence.currentIndex)
          .withContext(`prayerCount: ${prayerCount}`)
          .toEqual(prayerCount);

        if (beadSequence.currentIndex < expectedBeadCount) {
          expect(beadSequence.currentIndex)
            .withContext(`prayerCount: ${prayerCount} / beadSequence: ${beadSequence.currentIndex}`)
            .toEqual(prayerCount);
        }
      }

    });
  });
});


function sequenceDirection(prayerSequence: PrayerSequence, changeArray: number[]): number {
  let result = 0;
  let done = false;
  let prayer: Sequence;
  changeArray.forEach(change => {
    if (change !== 0 && !done) {
      const totalSteps = Math.abs(change);
      const step = (change / totalSteps);
      for (let stepIndex = 0; stepIndex < totalSteps && !done; stepIndex++) {
        if (step > 0) {
          prayer = prayerSequence.next();
          result++;
        }
        else {
          prayer = prayerSequence.previous();
          result--;
        }
        done = (prayer === undefined);
      }
    }
  });
  return result;
};
