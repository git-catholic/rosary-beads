import { ComponentFixture } from "@angular/core/testing";
import { LanguageSelectorComponent } from "../language-selector.component";
import { DomGetterByTestId } from "src/app/utils-for-test/dom-utils.spec";

export class LanguageSelectorFixtureSpec {

  readonly langOption1: DomGetterByTestId<LanguageSelectorComponent, HTMLElement>;
  readonly langOption2: DomGetterByTestId<LanguageSelectorComponent, HTMLElement>;
  readonly langOption3: DomGetterByTestId<LanguageSelectorComponent, HTMLElement>;
  readonly langOptionNotExist: DomGetterByTestId<LanguageSelectorComponent, HTMLElement>;

  constructor(private fixture: ComponentFixture<LanguageSelectorComponent>) {
    this.langOption1 = new DomGetterByTestId(this.fixture, 'lang-entry-0');
    this.langOption2 = new DomGetterByTestId(this.fixture, 'lang-entry-1');
    this.langOption3 = new DomGetterByTestId(this.fixture, 'lang-entry-2');
    this.langOptionNotExist = new DomGetterByTestId(this.fixture, 'lang-entry-3');
  }

}