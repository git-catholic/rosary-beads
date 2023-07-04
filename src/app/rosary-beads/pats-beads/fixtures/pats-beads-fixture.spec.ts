import { ComponentFixture } from "@angular/core/testing";
import { PatsBeadsComponent } from "../pats-beads.component";
import { DomGetterById } from "src/app/utils-for-test/dom-utils.spec";

export class PatsBeadsFixtureSpec {

  constructor(private fixture: ComponentFixture<PatsBeadsComponent>) { }

  readonly highlightDivElement = new DomGetterById(this.fixture, 'patsBeadsHighlightDiv');

}
