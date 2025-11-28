import { EventEmitter } from "@angular/core";
import { NavigateSequence, Sequence, SequenceTemplate } from "../models/sequence";

export interface RosaryBeads extends NavigateSequence, SequenceTemplate {
  highlightStyle: string;

  // activeBeadsEvent: EventEmitter<RosaryBeads>;

  // initBeadPositionSequence(beadPositionSequence: Sequence[]): void;
  initHolyRosarySequence(): void;
  updateBeadPosition(prayerIdx: number): void;
  updateBeadPositionSequence(beadPositionSequence: Sequence[]): void;
}
