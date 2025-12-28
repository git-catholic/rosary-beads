import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppDateService } from 'src/app/services/app-date.service';

import { MysteryDisplayComponent } from './mystery-display.component';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';
import { TranslateService } from '@ngx-translate/core';

describe('MysteryDisplayComponent', () => {
  let component: MysteryDisplayComponent;
  let fixture: ComponentFixture<MysteryDisplayComponent>;
  let appDateService: AppDateService;

  beforeEach(() => {
    appDateService = new AppDateService(undefined);

    TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        { provide: AppDateService, useValue: appDateService }
      ]
    });

    const translate = TestBed.inject(TranslateService);
    translate.use('en');

    fixture = TestBed.createComponent(MysteryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
