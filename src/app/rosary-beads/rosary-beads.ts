import { NavigateSequence, SequenceTemplate } from "../models/sequence";

export interface RosaryBeads extends NavigateSequence, SequenceTemplate {
  highlightStyle: string;
}
