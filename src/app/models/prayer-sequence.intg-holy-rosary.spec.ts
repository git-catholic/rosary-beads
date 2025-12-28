import { TestBed } from "@angular/core/testing";
import { PrayerSequence } from "./prayer-sequence";
import { Sequence } from "./sequence";
import { RosaryTranslateModule } from "../modules/rosary-translate.module";
import { AppConfigService } from "../services/app-config.service";
import { AppDateService } from "../services/app-date.service";
import { LocalizationService } from "../services/localization.service";
import { PrayerFactoryService } from "../services/prayer-factory.service";
import { RosaryMysteriesEnum } from "../utils/rosary-mysteries-enum";
import { TranslateService } from "@ngx-translate/core";

describe('PrayerSequence', () => {

  describe(`PrayerHolyRosary`, () => {
    let prayerCount = 0;
    let prayerSequence: PrayerSequence;
    let translate: TranslateService;

    beforeEach(() => {
      //prayerSequence = new PrayerHolyRosary(new MysteryGlorious());
      TestBed.configureTestingModule({
        imports: [
          RosaryTranslateModule
        ],
        providers: [
          { provide: AppDateService, useValue: new AppDateService(undefined) },
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
      prayerSequence = prayerFactoryService.newRosaryPrayer(activeMysteries, undefined);
    });

    it('should successfully increment to next prayer until the end of the rosary', () => {
      // given
      const expectedPrayerCount = 82;
      expect(prayerSequence.currentIndex).toEqual(0);
      expect(prayerSequence.totalPrayerCount).toEqual(expectedPrayerCount);

      // when (start)
      let prayer = prayerSequence.start();

      // then (start)
      checkPrayerName(prayer, 'signCrossName', 'The Sign of the Cross');

      // when (forward to Glory)
      for (let idx = 0; prayerSequence.hasNext() && idx < 6; idx++) {
        prayerCount++;
        prayer = prayerSequence.next();
      }

      // then (forward to Glory)
      checkPrayerName(prayer, 'gloryName', 'The Glory Be (The Doxology)');

      // when (back 1)
      prayerCount--;
      prayer = prayerSequence.previous();

      // then (back 1)
      checkPrayerName(prayer, 'hailMaryName', 'Hail Mary');

      // when (forward 2)
      for (let idx = 0; prayerSequence.hasNext() && idx < 2; idx++) {
        prayerCount++;
        prayer = prayerSequence.next();
      }

      // then (forward 2)
      checkPrayerName(prayer, 'first-glorious', 'First Glorious Mystery');

      // when (forward 1)
      prayerCount++;
      prayer = prayerSequence.next();

      // then (forward 1)
      checkPrayerName(prayer, 'ourFatherName', 'Our Father');

      // when / then (10 Hail Mary's)
      for (let idx = 0; prayerSequence.hasNext() && idx < 10; idx++) {
        prayerCount++;
        prayer = prayerSequence.next();
        checkPrayerName(prayer, 'hailMaryName', 'Hail Mary');
      }

      // when (forward 1 to Glory)
      prayerCount++;
      prayer = prayerSequence.next();

      // then (forward 1 to Glory)
      checkPrayerName(prayer, 'gloryName', 'The Glory Be (The Doxology)');

      // when (go to end)
      while (prayer !== undefined) {
        prayerCount++;
        expect(prayer).toBeTruthy();
        prayer = prayerSequence.next();
      }

      // then (go to end)
      expect(prayer).toBeFalsy();
      expect(prayerCount).toEqual(expectedPrayerCount);

    });

    [
      { forward: 2, back: 1 },
      { forward: 3, back: 1 },
      { forward: 4, back: 2 },
    ]
    .forEach(entry => {
      it(`should successfully traverse the prayer sequence going ${entry.forward} forward and ${entry.back} back`, () => {
        // given
        const expectedPrayerCount = 82;
        const forward = entry.forward;
        const back = entry.back * -1;

        // -- and
        expect(prayerSequence.currentIndex).toEqual(0);
        expect(prayerSequence.totalPrayerCount).toEqual(expectedPrayerCount);

        // when (start)
        let prayer = prayerSequence.start();

        // then (start)
        let sequenceDirectionIndex = prayerSequence.currentIndex;
        let prayerIndex = sequenceDirectionIndex;
        checkPrayerName(prayer, 'signCrossName', 'The Sign of the Cross');

        while (prayerSequence.hasNext()) {
          // when (forward/back)
          const change = sequenceDirection(prayerSequence, [forward, back]);
          sequenceDirectionIndex += change;
          prayerIndex += change;

          if (prayerIndex < expectedPrayerCount) {
            // then (forward/back) - skip last check as it is not important in this case.
            expect(sequenceDirectionIndex).toEqual(prayerSequence.currentIndex);
          }
        }

        expect(sequenceDirectionIndex).toEqual(expectedPrayerCount);
      });
    });

    function checkPrayerName(prayer: Sequence, expectedId: string, expectedValue: string) {
      expect(prayer).toBeTruthy();
      expect(prayer?.name?.length).toBeGreaterThan(0);
      const value = translate.instant(prayer?.name);
      expect(prayer?.name).toEqual(expectedId);
      expect(value).toEqual(expectedValue);
    }
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
