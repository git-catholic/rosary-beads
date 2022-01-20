import { BeadGroup } from "./bead-group";

export interface BeadGroupContainer {
  beadGroups: BeadGroup[];
  beadMap: Map<string, BeadGroup>;
}
