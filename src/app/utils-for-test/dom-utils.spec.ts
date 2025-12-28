import { DebugElement, Predicate } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

export abstract class AbstractDomGetter<C, T extends HTMLElement> {

  constructor(protected fixture: ComponentFixture<C>, protected id: string) { }

  get debugElement(): DebugElement {
    return this.fixture?.debugElement?.query(By.css(this.queryId()));
  }

  get nativeElement(): T {
    return this.fixture.nativeElement.querySelector(this.queryId());
  }

  protected abstract queryId(): string;

}

export class DomGetterById<C, T extends HTMLElement> extends AbstractDomGetter<C, T> {

  constructor(protected fixture: ComponentFixture<C>, protected id: string) {
    super(fixture, id);
  }

  protected queryId(): string {
      return `#${this.id}`;
  }

}

export class DomGetterByTestId<C, T extends HTMLElement> extends AbstractDomGetter<C, T> {

  private readonly reflectedAttrName: string;

  constructor(protected fixture: ComponentFixture<C>, protected id: string) {
    super(fixture, id);
    this.reflectedAttrName = reflectedAttributeName('test-id');
  }

  protected queryId(): string {
    return `[test-id="${this.id}"]`;
  }

}

function reflectedAttributeName(attrName: string): string {
  return `ng-reflect-${attrName}`;
}