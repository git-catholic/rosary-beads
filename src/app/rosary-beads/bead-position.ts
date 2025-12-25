import { Sequence, SequenceTemplate } from "../models/sequence";

export interface BeadPositionTemplate extends SequenceTemplate {
  x: number;
  y: number;
}

export class BeadPosition extends Sequence implements BeadPositionTemplate {
  readonly x: number;
  readonly y: number;
  readonly id: string;
  readonly name?: string;

  constructor(beadPositionTemplate: BeadPositionTemplate) {
    super(beadPositionTemplate?.maxTimes);
    this.id = beadPositionTemplate.id
    this.name = beadPositionTemplate.name;
    this.x = beadPositionTemplate.x;
    this.y = beadPositionTemplate.y;
  }
}
