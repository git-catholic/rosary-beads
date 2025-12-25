import { NavigateSequence, Sequence, SequenceTemplate } from "../models/sequence";

export interface RosaryBeads extends NavigateSequence, SequenceTemplate {
  highlightStyle: string;

  getActiveBeadDetails(): Sequence;

  initHolyRosarySequence(): void;
  updateBeadPosition(prayerIdx: number): void;
  updateBeadPositionSequence(beadPositionSequence: Sequence[]): void;
}
