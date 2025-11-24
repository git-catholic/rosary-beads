import { ComponentFixture } from "@angular/core/testing";
import { PatsBeadsComponent } from "../pats-beads.component";
import { DomGetterById } from "../../../utils-for-test/dom-utils.spec";

export class PatsBeadsFixtureSpec {

  readonly highlightDivElement: DomGetterById<PatsBeadsComponent, HTMLElement>;
  
  constructor(private fixture: ComponentFixture<PatsBeadsComponent>) {
    this.highlightDivElement = new DomGetterById(this.fixture, 'patsBeadsHighlightDiv');
  }

  // readonly highlightDivElement = new DomGetterById(this.fixture, 'patsBeadsHighlightDiv');

}
