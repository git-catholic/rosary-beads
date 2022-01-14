import { BeadGroupList } from "./bead-group-list";
import { BeadGroupContainer } from "../sequences/contemporary-rosary";

export abstract class HolyRosaryBeadGroupList extends BeadGroupList {

  constructor(protected beadContainer: BeadGroupContainer) {
    super(beadContainer);
  }
  
  abstract mysterySequenceName(): string;
  abstract mysteryNumber(): number;
  abstract mystery(): string;
  abstract fruit(): string;
  
}