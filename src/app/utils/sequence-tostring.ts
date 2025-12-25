import { PrayerSequence } from "../models/prayer-sequence";
import { Sequence } from "../models/sequence";
import { asLeaderResponse, asGroupPrayer, asMystery, isLeaderResponse, isGroupPrayer } from "./typeof-utils";

export function sequenceToString(check: Sequence | PrayerSequence): string {
  if (check instanceof PrayerSequence) {
    return prayerSequence_toString(check as PrayerSequence);
  }
  else if (check instanceof Sequence) {
    return sequence_toString(check as Sequence);
  }
  return undefined;
}

function prayerSequence_toString(prayerSequence: PrayerSequence): string {
  const currentPrayer = prayerSequence.getCurrentPrayer();
  const leaderResponse = asLeaderResponse(currentPrayer);
  const groupPrayer = asGroupPrayer(currentPrayer);
  const mystery = asMystery(currentPrayer);

  let prayer = '';
  if (leaderResponse !== undefined) {
    prayer = `leader: ${leaderResponse?.leader}\n`
      + `response: ${leaderResponse?.response}\n`;
  }
  if (groupPrayer !== undefined) {
    prayer += `all: ${groupPrayer?.all}\n`;
  }
  if (mystery !== undefined) {
    prayer += `mystery: ${mystery?.mystery} (${mystery?.fruit})`;
  }
  return `id: ${prayerSequence.id}\n`
    + `name: ${prayerSequence.name}\n`
    + `index: ${prayerSequence.getPrayerIndex()}\n`
    + `seqIdx: ${prayerSequence.sequenceIndex}\n`
    + `leader/response? ${isLeaderResponse(prayerSequence.getCurrentPrayer())}\n`
    + `group? ${isGroupPrayer(prayerSequence.getCurrentPrayer())}\n`
    + `prayers:\n${prayer}\n`;
}

function sequence_toString(sequence: Sequence): string {
  return `id: ${sequence.id}\n`
    + `name: ${sequence.name}\n`
    + `index: ${sequence.currentIndex}\n`
}