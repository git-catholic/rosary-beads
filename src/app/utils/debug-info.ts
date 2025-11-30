import { Sequence } from "../models/sequence";

export function dumpSequence(sequences: Sequence[]) {
  if (sequences?.length > 0) {
    sequences.forEach((sequence, idx) => {
      console.log(`[${idx}]\n${sequence.toString()}`);
      console.log(`----------------------------------`);
    })
  }
}