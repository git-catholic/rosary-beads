import { GroupPrayerTemplate, LeaderResponseTemplate, Sequence } from "../models/sequence";

export function isLeaderResponse(check: Sequence | LeaderResponseTemplate): boolean {
  const leaderResponse = check as LeaderResponseTemplate;
  //console.log(`leaderResponse: ${JSON.stringify(check)}`);
  return leaderResponse?.leader !== undefined
    && leaderResponse?.response !== undefined;
}

export function asLeaderResponse(check: Sequence | LeaderResponseTemplate): LeaderResponseTemplate {
  return isLeaderResponse(check)
    ? check as LeaderResponseTemplate
    : undefined;
}

export function isGroupPrayer(check: Sequence | GroupPrayerTemplate): boolean {
  const groupPrayer = check as GroupPrayerTemplate;
  //console.log(`groupPrayer: ${JSON.stringify(check)}`);
  return groupPrayer?.id !== undefined && groupPrayer?.all !== undefined;
}

export function asGroupPrayer(check: Sequence | GroupPrayerTemplate): GroupPrayerTemplate {
  return isGroupPrayer(check)
    ? check as GroupPrayerTemplate
    : undefined;
}