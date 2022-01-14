import { BeadGroupList } from "../models/bead-group-list";

export class DivineMercy extends BeadGroupList {
  
  prayerName(): string {
    throw new Error("Method not implemented.");
  }
  
  protected onNextStart(): void {
    throw new Error("Method not implemented.");
  }

  protected onNextBeadGroupDone(): void {
    throw new Error("Method not implemented.");
  }

  protected onNextBeadGroupContinued(): void {
    throw new Error("Method not implemented.");
  }

  protected onNextEnd(): void {
    throw new Error("Method not implemented.");
  }

  protected onPreviousStart(): void {
    throw new Error("Method not implemented.");
  }

  protected onPreviousBead(): void {
    throw new Error("Method not implemented.");
  }

  protected onPreviousBeadGroup(): void {
    throw new Error("Method not implemented.");
  }
  
  protected onPreviousEnd(): void {
    throw new Error("Method not implemented.");
  }

}