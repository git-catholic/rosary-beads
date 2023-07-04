import { Component } from "@angular/core";
import { BeadPosition, BeadPositionTemplate } from "../bead-position";
import { PrayerSequence } from "src/app/models/prayer-sequence";
import { Sequence } from "src/app/models/sequence";
import { RosaryBeads } from "../rosary-beads";

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent extends PrayerSequence implements RosaryBeads {

  readonly id: string = 'PatsBeadsComponent';

  readonly name: string = `:@@patsBeads:Pat's Beads`;

  highlightStyle: string;

  protected init(): Sequence[] {
    const beadPostionTemplates: BeadPositionTemplate[] = [

      // 0
      { id: '0-0', x: 853, y: 3454 },  // Sign of the cross

      // 1
      { id: '0-1', x: 948, y: 3208, maxTimes: 2 },  // Apostles Creed and Our Father

      // 2
      { id: '0-2', x: 1051, y: 2992 }, // Hail Marys
      { id: '0-3', x: 1033, y: 2902 },
      { id: '0-4', x: 988, y: 2830 },

      // 5
      { id: '0-5', x: 815, y: 2646, maxTimes: 2 },  // Glory Be and First Mystery

      // 6
      { id: '1-0', x: 805, y: 2368 },  // Our Father

      // 7
      { id: '1-1', x: 949, y: 2170 },  // Hail Marys
      { id: '1-2', x: 1015, y: 2091 },
      { id: '1-3', x: 1060, y: 2012 },
      { id: '1-4', x: 1105, y: 1933 },
      { id: '1-5', x: 1141, y: 1841 },
      { id: '1-6', x: 1169, y: 1761 },
      { id: '1-7', x: 1228, y: 1673 },
      { id: '1-8', x: 1305, y: 1604 },
      { id: '1-9', x: 1339, y: 1533 },
      { id: '1-10', x: 1353, y: 1442 },

      // 17
      { id: '1-11', x: 1458, y: 1249, maxTimes: 4 }, // Glory Be, Fatima, Second Mystery, and Our Father

      // 18
      { id: '2-1', x: 1425, y: 1018 }, // Hail Marys
      { id: '2-2', x: 1430, y: 924 },
      { id: '2-3', x: 1458, y: 836 },
      { id: '2-4', x: 1458, y: 765 },
      { id: '2-5', x: 1447, y: 682 },
      { id: '2-6', x: 1441, y: 600 },
      { id: '2-7', x: 1425, y: 512 },
      { id: '2-8', x: 1370, y: 429 },
      { id: '2-9', x: 1287, y: 407 },
      { id: '2-10', x: 1199, y: 396 },

      // 28
      { id: '2-11', x: 1045, y: 495, maxTimes: 4 },  // Glory Be, Fatima, Third Mystery, and Our Father

      // 29
      { id: '3-1', x: 820, y: 479 },   // Hail Marys
      { id: '3-2', x: 771, y: 400 },
      { id: '3-3', x: 723, y: 324 },
      { id: '3-4', x: 693, y: 238 },
      { id: '3-5', x: 705, y: 144 },
      { id: '3-6', x: 658, y: 103 },
      { id: '3-7', x: 584, y: 84 },
      { id: '3-8', x: 504, y: 107 },
      { id: '3-9', x: 443, y: 165 },
      { id: '3-10', x: 408, y: 242 },

      // 39
      { id: '3-11', x: 357, y: 459, maxTimes: 4 },   // Glory Be, Fatima, Fourth Mystery, and Our Father

      // 40
      { id: '4-1', x: 391, y: 683 },   // Hail Marys
      { id: '4-2', x: 351, y: 759 },
      { id: '4-3', x: 279, y: 788 },
      { id: '4-4', x: 186, y: 836 },
      { id: '4-5', x: 142, y: 907 },
      { id: '4-6', x: 123, y: 986 },
      { id: '4-7', x: 124, y: 1074 },
      { id: '4-8', x: 137, y: 1161 },
      { id: '4-9', x: 174, y: 1241 },
      { id: '4-10', x: 230, y: 1318 },

      // 50
      { id: '4-11', x: 399, y: 1503, maxTimes: 4 },  // Glory Be, Fatima, Fifth Mystery, and Our Father

      // 51
      { id: '5-1', x: 341, y: 1710 },  // Hail Marys
      { id: '5-2', x: 371, y: 1796 },
      { id: '5-3', x: 405, y: 1871 },
      { id: '5-4', x: 424, y: 1953 },
      { id: '5-5', x: 481, y: 2034 },
      { id: '5-6', x: 555, y: 2062 },
      { id: '5-7', x: 654, y: 2074 },
      { id: '5-8', x: 738, y: 2082 },
      { id: '5-9', x: 787, y: 2139 },
      { id: '5-10', x: 810, y: 2215 },

      // 61
      { id: '6-0', x: 805, y: 2368, maxTimes: 5 },  // Glory Be, Fatima, "Hail, Holy Queen" and Closing prayers

      // 62
      { id: '6-1', x: 853, y: 3454 }   // Sign of the cross

    ];

    const sequence: Sequence[] = [];
    beadPostionTemplates.forEach(entry => sequence.push(new BeadPosition(entry)));
    return sequence;
  }

  protected onNext(currentPrayer: Sequence): void {
    // No action by design
  }

  protected onPrevious(currentPrayer: Sequence): void {
    // No action by design
  }

  protected onStart(): void {
    // No action by design
  }

  protected onEnd(): void {
    // No action by design
  }

}
