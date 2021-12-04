import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, Input, ViewChild, ElementRef, HostListener } from "@angular/core";
import { BeadPosition } from "src/app/models/bead-position";
import { AppConfigService } from "src/app/services/app-config.service";
import { RosaryBeads } from "../rosary-beads";
import { PATS_BEADS_COORDS_LONG } from "./pats-beads-coords";

@Component({
  selector: 'app-pats-beads',
  templateUrl: './pats-beads.component.html',
  styleUrls: ['./pats-beads.component.scss']
})
export class PatsBeadsComponent implements OnInit, OnChanges, AfterViewInit, RosaryBeads {

  highlightBeadIdx: number = 0;
  highlightStyle: string;

  imageWidth: number;
  imageHeight: number;
  highlightTop: string;
  highlightLeft: string;

  private rawWidth = 1608;
  private rawHeight = 3704;
  rawCoords = PATS_BEADS_COORDS_LONG;

  @ViewChild('patsBeadsImg')
  patsBeadsImg: ElementRef<HTMLImageElement>;

  constructor(private appConfig: AppConfigService) {
    this.appConfig.screenOrientationChangeEvent.subscribe((portrait: boolean) => {
      this.updateBeadPosition(this.highlightBeadIdx);
    });
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateBeadPosition(0));
  }

  get isPortrait(): boolean {
    return this.appConfig?.isPortrait;
  }

  updateBeadPosition(highlightBeadIdx: number): void {
    this.highlightBeadIdx = highlightBeadIdx;
    this.highlightStyle = this.calculateHighlightStyle(this.appConfig.isPortrait);
  }

  private calculateHighlightStyle(isPortrait: boolean): string {
    if (this.patsBeadsImg) {
      const point = this.rawCoords[this.highlightBeadIdx];

      const style = (isPortrait)
        ? this.highlightStyleForPortrait(point)
        : this.highlightStyleForLandscape(point);

      return style;
    }

    return undefined;
  }

  private highlightStyleForPortrait(point: BeadPosition): string {
    const scale = this.patsBeadsImg.nativeElement.width / this.rawHeight;
    return this.generateHighlightStyle(point.y * -1, point.x, scale, this.patsBeadsImg.nativeElement.width + 5, 52);
  }

  private highlightStyleForLandscape(point: BeadPosition): string {
    let scale = this.patsBeadsImg.nativeElement.height / this.rawHeight;
    if (scale === undefined || scale <= 0) {
      scale = 0.09260259;
    }
    return this.generateHighlightStyle(point.x, point.y, scale, this.patsBeadsImg.nativeElement.offsetLeft, this.patsBeadsImg.nativeElement.offsetTop);
  }

  private generateHighlightStyle(x: number, y: number, scale: number, offsetX: number, offsetY: number): string {
    const diameter = (125 * scale);
    const border = (150 * scale);
    const offset = border / 2;
    return `left: ${(x * scale) - offset + offsetX}px;`
      + ` top: ${(y * scale) - offset + offsetY}px;`
      + ` width: ${diameter}px; height: ${diameter}px; border-width: ${border};`;
  }

  private debugElementRef(desc: string, elementRef: ElementRef) {
    console.log(`${desc} - ${elementRef?.nativeElement?.name} exists: ${elementRef}, ${elementRef?.nativeElement?.width}, ${elementRef?.nativeElement?.height}`);
  }

}

