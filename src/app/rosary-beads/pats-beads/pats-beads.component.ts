import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from "@angular/core";
import { BeadPosition, BeadPositionTemplate } from "../bead-position";
import { PrayerSequence } from "../../models/prayer-sequence";
import { Sequence } from "../../models/sequence";
import { RosaryBeads } from "../rosary-beads";
import { CommonModule } from "@angular/common";
import { AppConfigService } from "../../services/app-config.service";
import { holyRosarySequenceForPatsBeads } from "./holy-rosary-pats-beads-seq";

@Component({
  selector: 'app-pats-beads',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent extends PrayerSequence implements AfterViewInit, RosaryBeads {

  readonly id: string = 'PatsBeadsComponent';

  readonly name: string = `:@@patsBeads:Pat's Beads`;

  highlightBeadIdx: number = 0;
  highlightStyle: string;

  imageWidth: number;
  imageHeight: number;
  highlightTop: string;
  highlightLeft: string;

  // @Output()
  // activeBeadsEvent = new EventEmitter<RosaryBeads>;

  private rawWidth = 1608;
  private rawHeight = 3704;
  private rawCoords: Sequence[];

  @ViewChild('patsBeadsImg')
  patsBeadsImg: ElementRef<HTMLImageElement>;

  constructor(private appConfig: AppConfigService,
              @Inject('activeBeadsEvent') private activeBeadsEvent: (activeBeads: RosaryBeads) => void) { //, private beadPositionSequence: Sequence[]) {
    super(holyRosarySequenceForPatsBeads());
    //this.updateBeadPositionSequence(beadPositionSequence);
    this.initHolyRosarySequence();
    this.appConfig.screenOrientationChangeEvent.subscribe((portrait: boolean) => {
      this.updateBeadPosition(this.highlightBeadIdx);
    });
  }


  ngAfterViewInit(): void {
    // console.log(`ngAfterViewInit PatsBeadsComponent`);
    // this.initHolyRosarySequence();
    setTimeout(() => this.updateBeadPosition(0));
    console.log(`pats-beads: emit`);
    //this.activeBeadsEvent.emit(this);
    this.activeBeadsEvent(this);
  }

  initHolyRosarySequence(): void {
    this.initBeadPositionSequence(holyRosarySequenceForPatsBeads())
  }

  initBeadPositionSequence(beadPositionSequence: Sequence[]): void {
    this.updateBeadPositionSequence(beadPositionSequence);
    setTimeout(() => this.updateBeadPosition(0));
  }

  get isPortrait(): boolean {
    return this.appConfig?.isPortrait;
  }

  updateBeadPosition(prayerIdx: number): void {
    console.log(`prayerIdx: ${prayerIdx}`);
    this.highlightBeadIdx = prayerIdx;
    this.highlightStyle = this.calculateHighlightStyle(this.isPortrait);
  }

  updateBeadPositionSequence(beadPositionSequence: Sequence[]): void {
    console.log(`updateBeadPositionSequence with ${beadPositionSequence?.length} values`);
    this.rawCoords = beadPositionSequence;
  }

  // protected init(): Sequence[] {
  //   const beadPostionTemplates: BeadPositionTemplate[] = [

  //     // 0
  //     { id: '0-0', x: 853, y: 3454 },  // Sign of the cross

  //     // 1
  //     { id: '0-1', x: 948, y: 3208 },  // Apostles Creed
  //     { id: '0-1', x: 948, y: 3208 },  // Our Father

  //     // 2
  //     { id: '0-2', x: 1051, y: 2992 }, // Hail Marys
  //     { id: '0-3', x: 1033, y: 2902 },
  //     { id: '0-4', x: 988, y: 2830 },

  //     // 5
  //     { id: '0-5', x: 815, y: 2646 },  // Glory Be
  //     { id: '0-5', x: 815, y: 2646 },  // First Mystery

  //     // 6
  //     { id: '1-0', x: 805, y: 2368 },  // Our Father

  //     // 7
  //     { id: '1-1', x: 949, y: 2170 },  // Hail Marys
  //     { id: '1-2', x: 1015, y: 2091 },
  //     { id: '1-3', x: 1060, y: 2012 },
  //     { id: '1-4', x: 1105, y: 1933 },
  //     { id: '1-5', x: 1141, y: 1841 },
  //     { id: '1-6', x: 1169, y: 1761 },
  //     { id: '1-7', x: 1228, y: 1673 },
  //     { id: '1-8', x: 1305, y: 1604 },
  //     { id: '1-9', x: 1339, y: 1533 },
  //     { id: '1-10', x: 1353, y: 1442 },

  //     // 17
  //     { id: '1-11', x: 1458, y: 1249 }, // Glory Be
  //     { id: '1-11', x: 1458, y: 1249 }, // Fatima
  //     { id: '1-11', x: 1458, y: 1249 }, // Second Mystery
  //     { id: '1-11', x: 1458, y: 1249 }, // Our Father

  //     // 18
  //     { id: '2-1', x: 1425, y: 1018 }, // Hail Marys
  //     { id: '2-2', x: 1430, y: 924 },
  //     { id: '2-3', x: 1458, y: 836 },
  //     { id: '2-4', x: 1458, y: 765 },
  //     { id: '2-5', x: 1447, y: 682 },
  //     { id: '2-6', x: 1441, y: 600 },
  //     { id: '2-7', x: 1425, y: 512 },
  //     { id: '2-8', x: 1370, y: 429 },
  //     { id: '2-9', x: 1287, y: 407 },
  //     { id: '2-10', x: 1199, y: 396 },

  //     // 28
  //     { id: '2-11', x: 1045, y: 495 },  // Glory Be
  //     { id: '2-11', x: 1045, y: 495 },  // Fatima
  //     { id: '2-11', x: 1045, y: 495 },  // Third Mystery
  //     { id: '2-11', x: 1045, y: 495 },  // Our Father

  //     // 29
  //     { id: '3-1', x: 820, y: 479 },   // Hail Marys
  //     { id: '3-2', x: 771, y: 400 },
  //     { id: '3-3', x: 723, y: 324 },
  //     { id: '3-4', x: 693, y: 238 },
  //     { id: '3-5', x: 705, y: 144 },
  //     { id: '3-6', x: 658, y: 103 },
  //     { id: '3-7', x: 584, y: 84 },
  //     { id: '3-8', x: 504, y: 107 },
  //     { id: '3-9', x: 443, y: 165 },
  //     { id: '3-10', x: 408, y: 242 },

  //     // 39
  //     { id: '3-11', x: 357, y: 459 },   // Glory Be
  //     { id: '3-11', x: 357, y: 459 },   // Fatima
  //     { id: '3-11', x: 357, y: 459 },   // Fourth Mystery
  //     { id: '3-11', x: 357, y: 459 },   // Our Father

  //     // 40
  //     { id: '4-1', x: 391, y: 683 },   // Hail Marys
  //     { id: '4-2', x: 351, y: 759 },
  //     { id: '4-3', x: 279, y: 788 },
  //     { id: '4-4', x: 186, y: 836 },
  //     { id: '4-5', x: 142, y: 907 },
  //     { id: '4-6', x: 123, y: 986 },
  //     { id: '4-7', x: 124, y: 1074 },
  //     { id: '4-8', x: 137, y: 1161 },
  //     { id: '4-9', x: 174, y: 1241 },
  //     { id: '4-10', x: 230, y: 1318 },

  //     // 50
  //     { id: '4-11', x: 399, y: 1503 },  // Glory Be
  //     { id: '4-11', x: 399, y: 1503 },  // Fatima
  //     { id: '4-11', x: 399, y: 1503 },  // Fifth Mystery
  //     { id: '4-11', x: 399, y: 1503 },  // Our Father

  //     // 51
  //     { id: '5-1', x: 341, y: 1710 },  // Hail Marys
  //     { id: '5-2', x: 371, y: 1796 },
  //     { id: '5-3', x: 405, y: 1871 },
  //     { id: '5-4', x: 424, y: 1953 },
  //     { id: '5-5', x: 481, y: 2034 },
  //     { id: '5-6', x: 555, y: 2062 },
  //     { id: '5-7', x: 654, y: 2074 },
  //     { id: '5-8', x: 738, y: 2082 },
  //     { id: '5-9', x: 787, y: 2139 },
  //     { id: '5-10', x: 810, y: 2215 },

  //     // 61
  //     { id: '6-0', x: 805, y: 2368},  // Glory Be
  //     { id: '6-0', x: 805, y: 2368},  // Fatima
  //     { id: '6-0', x: 805, y: 2368},  // "Hail, Holy Queen"
  //     { id: '6-0', x: 805, y: 2368},  // Closing prayer #1
  //     { id: '6-0', x: 805, y: 2368},  // Closing prayer #2

  //     // 62
  //     { id: '6-1', x: 853, y: 3454 }   // Sign of the cross

  //   ];

  //   const sequence: Sequence[] = [];
  //   beadPostionTemplates.forEach(entry => sequence.push(new BeadPosition(entry)));
  //   return sequence;
  // }

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

  private calculateHighlightStyle(isPortrait: boolean): string {
    console.log(`calculateHighlightStyle - 1`);
    if (this.patsBeadsImg) {
      console.log(`calculateHighlightStyle - 2 (${this.rawCoords?.length})`);
      const point = this.rawCoords[this.highlightBeadIdx] as BeadPosition;

      console.log(`calculateHighlightStyle - 3 (${point?.x}, ${point?.y}`);

      const style = (isPortrait)
        ? this.highlightStyleForPortrait(point)
        : this.highlightStyleForLandscape(point);

      return style;
    }

    return undefined;
  }

  private highlightStyleForPortrait(point: BeadPosition): string {
    const scale = this.patsBeadsImg.nativeElement.width / this.rawHeight;
    const offsetY = this.patsBeadsImg.nativeElement.parentElement.offsetTop;
    return this.generateHighlightStyle(point.y * -1, point.x, scale, this.patsBeadsImg.nativeElement.width + 5, offsetY);
  }

  private highlightStyleForLandscape(point: BeadPosition): string {
    let scale = this.patsBeadsImg.nativeElement.height / this.rawHeight;
    if (scale === undefined || scale <= 0) {
      scale = 0.09260259;
    }
    return this.generateHighlightStyle(point.x, point.y, scale, this.patsBeadsImg.nativeElement.offsetLeft, this.patsBeadsImg.nativeElement.offsetTop);
  }

  private generateHighlightStyle(x: number, y: number, scale: number, offsetX: number, offsetY: number): string {
    console.log(`offsetX: ${offsetX}, offsetY: ${offsetY}`);
    const diameter = (125 * scale);
    const border = (150 * scale);
    const offset = border / 2;
    return `left: ${(x * scale) - offset + offsetX}px;`
      + ` top: ${(y * scale) - offset + offsetY}px;`
      + ` width: ${diameter}px; height: ${diameter}px; border-width: ${border};`;
  }

}
