import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DeviceDetailsComponent } from './device-details.component';
import { AppConfigService } from '../../../services/app-config.service';
import { LocalizationService } from '../../../services/localization.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { TranslateService } from '@ngx-translate/core';
import { jest } from 'jest';

fdescribe('DeviceDetailsComponent', () => {
  let component: DeviceDetailsComponent;
  let fixture: ComponentFixture<DeviceDetailsComponent>;
  let activatedRoute: ActivatedRoute;

  const mockTranslate = {
    instant: jest.fn().mockReturnValue('mocked-message')
  };

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    //localizationUtil = new LocalizationService(mockTranslate);
    // appConfig = new AppConfigService(new AppDateService(activatedRoute), localizationUtil);

    TestBed.configureTestingModule({
      declarations: [
        DeviceDetailsComponent,
        LanguageSelectorComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: TranslateService, useValue: mockTranslate },
        // { provide: AppConfigService, useValue: appConfig },
        LocalizationService,
        AppConfigService
      ]
    });

    fixture = TestBed.createComponent(DeviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
