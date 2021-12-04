import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppDateService } from 'src/app/services/app-date.service';
import { LocalizationService } from 'src/app/services/localization.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent 
      ],
      providers: [
        { provide: AppDateService, useValue: new AppDateService(undefined) },
        LocalizationService,
        AppConfigService
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
