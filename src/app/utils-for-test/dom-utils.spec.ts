import { DebugElement, Predicate } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export class DomGetterById<C, T extends HTMLElement> {

  constructor(protected fixture: ComponentFixture<C>, protected id: string) { }

  get debugElement(): DebugElement {
    return this.fixture?.debugElement?.query(this.queryId);
  }

  get nativeElement(): T {
    return this.debugElement?.nativeElement;
  }

  protected get queryId(): Predicate<DebugElement> {
    return By.css(`#${this.id}`);
  }

}
