import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';
import { DeviceDetailsComponent } from './device-details.component';
import { DeviceDetailsFixtureSpec } from './fixtures/device-details-fixture.spec';
import { SupportedLanguagesService } from 'src/app/services/supported-languages.service';
import { AppConfigService } from 'src/app/services/app-config.service';
import { MockedStorage } from 'src/app/utils-for-test/mocks/mocked-state-storage-service.spec';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { DomGetterByTestId } from 'src/app/utils-for-test/dom-utils.spec';

describe('DeviceDetailsComponent', () => {
  let component: DeviceDetailsComponent;
  let fixture: ComponentFixture<DeviceDetailsComponent>;
  let elements: DeviceDetailsFixtureSpec;


  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: new MockedStorage()
    });

    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        DeviceDetailsComponent,

        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        RosaryTranslateModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        // provideRouter(testRoutes),
        AppConfigService,
        SupportedLanguagesService
      ]
    });

    fixture = TestBed.createComponent(DeviceDetailsComponent);
    elements = new DeviceDetailsFixtureSpec(fixture);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();

    expectElementVisible(elements.languageSelectorElement);
    expect(LanguageSelectorComponent.isTypeOf(elements.languageSelectorElement.debugElement.componentInstance)).toBeTrue();

    expectElementVisible(elements.navigationLabel);
    expectElementVisible(elements.navigationCheckbox);

    expectElementVisible(elements.versionLabel);
    expectElementVisible(elements.versionValue);

    expectElementVisible(elements.agentLabel);
    expectElementVisible(elements.agentValue);

    expectElementVisible(elements.portraitLabel);
    expectElementVisible(elements.portraitValue);

    expectElementVisible(elements.winInnerLabel);
    expectElementVisible(elements.winInnerValue);

    expectElementVisible(elements.winOuterLabel);
    expectElementVisible(elements.winOuterValue);

    expectElementVisible(elements.winDprLabel);
    expectElementVisible(elements.winDprValue);
  });

  function expectElementVisible<H extends HTMLElement>(element: DomGetterByTestId<DeviceDetailsComponent, H>): void {
    expect(element).toBeTruthy();
    expect(element?.nativeElement).toBeTruthy();
    expect(element?.debugElement).toBeTruthy();
  }
});
