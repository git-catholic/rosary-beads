import { ComponentFixture } from "@angular/core/testing";
import { DeviceDetailsComponent } from "../device-details.component";
import { DomGetterByTestId } from "src/app/utils-for-test/dom-utils.spec";

export class DeviceDetailsFixtureSpec {

  readonly languageSelectorElement: DomGetterByTestId<DeviceDetailsComponent, HTMLElement>;

  readonly navigationLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly navigationCheckbox: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  readonly versionLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly versionValue: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  readonly agentLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly agentValue: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  readonly portraitLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly portraitValue: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  readonly winInnerLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly winInnerValue: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  readonly winOuterLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly winOuterValue: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  readonly winDprLabel: DomGetterByTestId<DeviceDetailsComponent, HTMLLabelElement>;
  readonly winDprValue: DomGetterByTestId<DeviceDetailsComponent, HTMLInputElement>;

  constructor(private fixture: ComponentFixture<DeviceDetailsComponent>) {
    this.languageSelectorElement = new DomGetterByTestId(this.fixture, 'device-details-lang-selector');

    this.navigationLabel = new DomGetterByTestId(this.fixture, 'device-details-nav-label');
    this.navigationCheckbox = new DomGetterByTestId(this.fixture, 'device-details-nav-checkbox');

    this.versionLabel = new DomGetterByTestId(this.fixture, 'device-details-version-label');
    this.versionValue = new DomGetterByTestId(this.fixture, 'device-details-version-value');

    this.agentLabel = new DomGetterByTestId(this.fixture, 'device-details-agent-label');
    this.agentValue = new DomGetterByTestId(this.fixture, 'device-details-agent-value');

    this.portraitLabel = new DomGetterByTestId(this.fixture, 'device-details-portrait-label');
    this.portraitValue = new DomGetterByTestId(this.fixture, 'device-details-portrait-value');

    this.winInnerLabel = new DomGetterByTestId(this.fixture, 'device-details-inner-label');
    this.winInnerValue = new DomGetterByTestId(this.fixture, 'device-details-inner-value');

    this.winOuterLabel = new DomGetterByTestId(this.fixture, 'device-details-outer-label');
    this.winOuterValue = new DomGetterByTestId(this.fixture, 'device-details-outer-value');

    this.winDprLabel = new DomGetterByTestId(this.fixture, 'device-details-dpr-label');
    this.winDprValue = new DomGetterByTestId(this.fixture, 'device-details-dpr-value');
  }

}