import { Mystery } from "../models/holy-rosary/mysteries";
import { GroupPrayerTemplate, LeaderResponseTemplate, Sequence } from "../models/sequence";

export function isLeaderResponse(check: Sequence | LeaderResponseTemplate): boolean {
  const leaderResponse = check as LeaderResponseTemplate;
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
  return groupPrayer?.id !== undefined && groupPrayer?.all !== undefined;
}

export function asGroupPrayer(check: Sequence | GroupPrayerTemplate): GroupPrayerTemplate {
  return isGroupPrayer(check)
    ? check as GroupPrayerTemplate
    : undefined;
}

export function isMystery(check: Sequence | Mystery): boolean {
  const mystery = check as Mystery;
  return mystery?.id !== undefined && mystery?.mystery !== undefined;
}

export function asMystery(check: Sequence | Mystery): Mystery {
  return isMystery(check)
    ? check as Mystery
    : undefined;
}