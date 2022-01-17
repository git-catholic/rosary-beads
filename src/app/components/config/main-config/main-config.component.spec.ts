import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { LanguageSelectorComponent } from '../../language-selector/language-selector.component';
import { DeviceDetailsComponent } from '../device-details/device-details.component';

import { MainConfigComponent } from './main-config.component';

describe('MainConfigComponent', () => {
  let component: MainConfigComponent;
  let fixture: ComponentFixture<MainConfigComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    activatedRoute = new ActivatedRoute();

    await TestBed.configureTestingModule({
      declarations: [
        MainConfigComponent,

        DeviceDetailsComponent,
        LanguageSelectorComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
