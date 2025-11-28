import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppDateService } from 'src/app/services/app-date.service';

import { MysteryDisplayComponent } from './mystery-display.component';

describe('MysteryDisplayComponent', () => {
  let component: MysteryDisplayComponent;
  let fixture: ComponentFixture<MysteryDisplayComponent>;
  let appDateService: AppDateService;

  beforeEach(() => {
    appDateService = new AppDateService(undefined);

    TestBed.configureTestingModule({
      declarations: [ 
        MysteryDisplayComponent
      ],
      providers: [
        { provide: AppDateService, useValue: appDateService }
      ]
    });

    fixture = TestBed.createComponent(MysteryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
