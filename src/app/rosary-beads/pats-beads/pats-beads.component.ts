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

  getActiveBeadDetails(): Sequence {
    return this.rawCoords[this.highlightBeadIdx];
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
    if (this.patsBeadsImg) {
      const point = this.rawCoords[this.highlightBeadIdx] as BeadPosition;
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
