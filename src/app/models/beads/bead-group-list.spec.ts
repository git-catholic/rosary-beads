import { RosaryMysteriesEnum } from "../sequences/rosary-helper";
import { BeadGroupLoaderService } from "../services/bead-group-loader.service";
import { LocalizationService } from "../services/localization.service";
import { BeadGroup } from "./bead-group";
import { BeadGroupList } from "./bead-group-list";

describe('BeadGroupList', () => {

  describe('transition to next', () => {

    it('for Holy Rosary sequence with Glory Be and Fatima prayers displayed separately', () => {
      // given
      const localizationUtil = new LocalizationService();
      const loader = new BeadGroupLoaderService(localizationUtil);
      let beadGroupList: BeadGroupList = loader.loadHolyRosaryContemporaryMysteryEnum(RosaryMysteriesEnum.JOYFUL);
      let groupIdx = 0;
      let mysteryNum = 1;

      // when / then
      let beadGroup = beadGroupList.next();
      expectSignOfTheCross(beadGroup, groupIdx++);
      consoleLogBead('sign-cross (start)', beadGroup, groupIdx);

      // when / then
      beadGroup = beadGroupList.next();
      expectApostlesCreed(beadGroup, groupIdx++);
      consoleLogBead('creed', beadGroup, groupIdx);

      // when / then
      beadGroup = beadGroupList.next();
      expectOurFather(beadGroup, groupIdx++);
      consoleLogBead('our-father', beadGroup, groupIdx);

      // when / then
      expectHailMarySequence(beadGroupList, groupIdx++, 3);

      // when / then
      beadGroup = beadGroupList.next();
      expectGloryBeOnly(beadGroup, groupIdx++);
      consoleLogBead('glory', beadGroup, groupIdx);

      for (let idx = 0; idx < 5; idx++) {
        const currBead = beadGroupList.current();
        consoleLogBead('current', currBead, groupIdx);

        // when / then
        beadGroup = beadGroupList.next();
        expectMystery(beadGroup, groupIdx++, mysteryNum++);
        consoleLogBead('mystery', beadGroup, groupIdx);

        // when / then
        beadGroup = beadGroupList.next();
        expectOurFather(beadGroup, groupIdx++);
        consoleLogBead('our-father', beadGroup, groupIdx);

        // when / then
        expectHailMarySequence(beadGroupList, groupIdx++, 10);

        // when / then
        beadGroup = beadGroupList.next();
        expectGloryBeOnly(beadGroup, groupIdx++);
        consoleLogBead('glory', beadGroup, groupIdx);

        beadGroup = beadGroupList.next();
        expectFatimaOnly(beadGroup, groupIdx++);
        consoleLogBead('fatima', beadGroup, groupIdx);
      }

      // when / then
      beadGroup = beadGroupList.next();
      expectHailHolyQueen(beadGroup, groupIdx++);

      // when / then
      beadGroup = beadGroupList.next();
      expectClosing1(beadGroup, groupIdx++);

      // when / then
      beadGroup = beadGroupList.next();
      expectClosing2(beadGroup, groupIdx++);

      // when / then
      beadGroup = beadGroupList.next();
      consoleLogBead('sign-cross (end)', beadGroup, groupIdx);
    });

  });

});

function consoleLogBead(desc: string, beadGroup: BeadGroup, groupIdx: number) {
  //console.log(`${desc} - beadGroupIdx: ${beadGroup.groupIndex} - test groupId: ${groupIdx} - seqId: ${beadGroup.sequenceId}`);
}

function expectSignOfTheCross(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@sign-cross']);
}

function expectApostlesCreed(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@creed']);
}

function expectOurFather(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@our-father']);
}

function expectHailMarySequence(beadGroupList: BeadGroupList, expectedGroupIndex: number, expectedMaxIndex: number) {
  for (let idx = 0; idx < expectedMaxIndex; idx++) {
    const beadGroup = beadGroupList.next();
    consoleLogBead('hail-mary', beadGroup, expectedGroupIndex);
    expectHailMary(beadGroup, expectedGroupIndex, idx, expectedMaxIndex);
  }
}

function expectHailMary(beadGroup: BeadGroup, expectedGroupIndex: number,
    expectedIndex: number, expectedMaxIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(expectedIndex);
  expect(beadGroup.maxIndex).toEqual(expectedMaxIndex);
  expect(beadGroup.prayerIds).toEqual(['@@hail-mary']);
}

function expectGloryBeOnly(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@glory']);
}

function expectFatimaOnly(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@fatima']);
}

function expectGloryFatima(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.prayerIds).toEqual(['@@glory', '@@fatima']);
}

function expectHailHolyQueen(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.sequence).toEqual('hail-holy-queen');
}

function expectClosing(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.sequence).toEqual('closing1');
  expect(beadGroup.prayerIds).toEqual(['@@closing-1', '@@closing-2']);
}

function expectClosing1(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.sequence).toEqual('closing1');
  expect(beadGroup.prayerIds).toEqual(['@@closing-1']);
}

function expectClosing2(beadGroup: BeadGroup, expectedGroupIndex: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.index).toEqual(0);
  expect(beadGroup.maxIndex).toEqual(0);
  expect(beadGroup.sequence).toEqual('closing2');
  expect(beadGroup.prayerIds).toEqual(['@@closing-2']);
}

function expectMystery(beadGroup: BeadGroup, expectedGroupIndex: number, mysteryNum: number) {
  expect(beadGroup.groupIndex).toEqual(expectedGroupIndex);
  expect(beadGroup.sequence).toEqual(`mystery-${mysteryNum}`);
}

