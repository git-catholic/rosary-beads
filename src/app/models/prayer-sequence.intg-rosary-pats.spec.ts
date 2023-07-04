import { PatsBeadsComponent } from "../rosary-beads/pats-beads/pats-beads.component";
import { RosaryBeads } from "../rosary-beads/rosary-beads";
import { MysteryGlorious } from "./holy-rosary/mystery-glorious";
import { PrayerHolyRosary } from "./holy-rosary/prayer-holy-rosary";
import { PrayerSequence } from "./prayer-sequence";
import { Sequence } from "./sequence";

describe('PrayerSequence', () => {

  describe('PrayerHolyRosary and PatsBeadsComponent integration', () => {
    let prayerCount = 0;
    let beadSequence: RosaryBeads;
    let prayerSequence: PrayerSequence;
    const expectedPrayerCount = 81;

    beforeEach(() => {
      beadSequence = new PatsBeadsComponent();
      prayerSequence = new PrayerHolyRosary(new MysteryGlorious(), beadSequence);
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
        expect(prayerSequence.currentIndex).toEqual(prayerCount);
        expect(beadSequence.currentIndex).toEqual(prayerCount);
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
