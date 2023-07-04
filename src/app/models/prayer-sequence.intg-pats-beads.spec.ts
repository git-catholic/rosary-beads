import { PatsBeadsComponent } from "../rosary-beads/pats-beads/pats-beads.component";
import { PrayerSequence } from "./prayer-sequence";
import { Sequence } from "./sequence";

describe('PrayerSequence', () => {

  describe(`PatsBeadsComponent`, () => {
    let prayerCount = 0;
    let prayerSequence: PrayerSequence;

    beforeEach(() => {
      prayerSequence = new PatsBeadsComponent();
    });

    it('should successfully increment to next prayer until the end of the rosary', () => {
      // given
      const expectedPrayerCount = 81;
      expect(prayerSequence.currentIndex).toEqual(0);
      expect(prayerSequence.totalPrayerCount).toEqual(expectedPrayerCount);

      // when (start)
      let prayer = prayerSequence.start();

      // then (start)
      expect(prayer?.id).toBeTruthy();

      // when (forward to Glory)
      for (let idx = 0; prayerSequence.hasNext() && idx < 6; idx++) {
        prayerCount++;
        prayer = prayerSequence.next();
      }

      // then (forward to Glory)
      expect(prayer?.id).toBeTruthy();

      // when (back 1)
      prayerCount--;
      prayer = prayerSequence.previous();

      // then (back 1)
      expect(prayer?.id).toBeTruthy();

      // when (forward 2)
      for (let idx = 0; prayerSequence.hasNext() && idx < 2; idx++) {
        prayerCount++;
        prayer = prayerSequence.next();
      }

      // then (forward 2)
      expect(prayer?.id).toBeTruthy();

      // when (forward 1)
      prayerCount++;
      prayer = prayerSequence.next();

      // then (forward 1)
      expect(prayer?.id).toBeTruthy();

      // when / then (10 Hail Mary's)
      for (let idx = 0; prayerSequence.hasNext() && idx < 10; idx++) {
        prayerCount++;
        prayer = prayerSequence.next();
        expect(prayer?.id).toBeTruthy();
      }

      // when (forward 1 to Glory)
      prayerCount++;
      prayer = prayerSequence.next();

      // then (forward 1 to Glory)
      expect(prayer?.id).toBeTruthy();

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
        const expectedPrayerCount = 81;
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
        expect(prayer?.id).toBeTruthy()

        while (prayerSequence.hasNext()) {
          // when (forward/back)
          const change = sequenceDirection(prayerSequence, [forward, back]);
          sequenceDirectionIndex += change;
          prayerIndex += change;

          if (change === forward + back) {
            // then (forward/back) - skip last check as it is not important in this case.
            expect(sequenceDirectionIndex).toEqual(prayerSequence.currentIndex);
          }
        }

        expect(sequenceDirectionIndex).toEqual(expectedPrayerCount);
      });
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
