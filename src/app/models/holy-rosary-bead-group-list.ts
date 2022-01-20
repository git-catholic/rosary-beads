import { BeadGroupContainer } from "./bead-group-container";
import { BeadGroupList } from "./bead-group-list";

export abstract class HolyRosaryBeadGroupList extends BeadGroupList {

  constructor(protected beadContainer: BeadGroupContainer) {
    super(beadContainer);
  }
  
  abstract mysterySequenceName(): string;
  abstract mysteryNumber(): number;
  abstract mystery(): string;
  abstract fruit(): string;
  
}