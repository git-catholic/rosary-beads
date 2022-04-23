import { addDays, LIT_YEAR_2020_2021 } from "src/utils/key-dates";
import { LiturgicalColors } from "../models/liturgical-colors";
import { RosaryMysteriesEnum } from "../sequences/rosary-helper";

export interface LiturgicalDataForTest {
  dateForTest: Date;
  expectedColor: LiturgicalColors;
  expectedMystery: RosaryMysteriesEnum;
  expectAdvent?: boolean;
  expectChristmas?: boolean;
  expectLent?: boolean;
  expectTriduum?: boolean;
  expectEaster?: boolean;
  isAshWednesday?: boolean;
  isPalmSunday?: boolean;
  isPentacostSunday?: boolean;
}

export const adventLiturgicalTestData: LiturgicalDataForTest[] = [
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.advent.startDate, -1),
    expectedColor: LiturgicalColors.GREEN,
    expectedMystery: RosaryMysteriesEnum.JOYFUL
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.advent.startDate, 0),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.JOYFUL,
    expectAdvent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.advent.startDate, 7),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.JOYFUL,
    expectAdvent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.advent.startDate, 14),
    expectedColor: LiturgicalColors.ROSE,
    expectedMystery: RosaryMysteriesEnum.JOYFUL,
    expectAdvent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.advent.startDate, 21),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.JOYFUL,
    expectAdvent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.advent.endDate, 0),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: undefined,
    expectAdvent: true
  }
]

export const christmasLiturgicalTestData: LiturgicalDataForTest[] = [
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.christmas.startDate, 0),
    expectedColor: LiturgicalColors.WHITE,
    expectedMystery: RosaryMysteriesEnum.GLORIOUS,
    expectChristmas: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.christmas.endDate, -1),
    expectedColor: LiturgicalColors.WHITE,
    expectedMystery: undefined,
    expectChristmas: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.christmas.endDate, 1),
    expectedColor: LiturgicalColors.GREEN,
    expectedMystery: undefined
  }
];

export const lentLiturgicalTestData: LiturgicalDataForTest[] = [
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 0),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true,
    isAshWednesday: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 4),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 11),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 18),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 25),
    expectedColor: LiturgicalColors.ROSE,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 32),
    expectedColor: LiturgicalColors.VIOLET,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.lent.startDate, 39),
    expectedColor: LiturgicalColors.RED,
    expectedMystery: RosaryMysteriesEnum.SORROWFUL,
    expectLent: true,
    isPalmSunday: true
  }
];

export const triduumLiturgicalTestData: LiturgicalDataForTest[] = [
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.triduum.startDate, 0),
    expectedColor: LiturgicalColors.RED,
    expectedMystery: undefined,
    expectLent: true,
    expectTriduum: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.triduum.endDate, 0),
    expectedColor: LiturgicalColors.WHITE,
    expectedMystery: undefined,
    expectTriduum: true,
    expectEaster: true
  }
]

export const easterLiturgicalTestData: LiturgicalDataForTest[] = [
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.easter.startDate, 0),
    expectedColor: LiturgicalColors.WHITE,
    expectedMystery: undefined,
    expectTriduum: true,
    expectEaster: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.easter.startDate, 1),
    expectedColor: LiturgicalColors.WHITE,
    expectedMystery: undefined,
    expectEaster: true
  },
  {
    dateForTest: addDays(LIT_YEAR_2020_2021.easter.endDate, 0),
    expectedColor: LiturgicalColors.WHITE,
    expectedMystery: undefined,
    expectEaster: true
  }
]

export const liturgicalTestData: LiturgicalDataForTest[] = [
  ...adventLiturgicalTestData,
  ...christmasLiturgicalTestData,
  ...lentLiturgicalTestData,
  ...triduumLiturgicalTestData,
  ...easterLiturgicalTestData
];

