import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AppDateService } from 'src/app/services/app-date.service';
import { LocalizationService } from 'src/app/services/localization.service';
import { LiturgicalYearService } from 'src/app/services/liturgical-year.service';

import { NoticesComponent } from './notices.component';
import { ActivatedRoute } from '@angular/router';
import { LiturgicalDatesComponent } from '../liturgical-dates/liturgical-dates.component';

describe('NoticesComponent', () => {
  let component: NoticesComponent;
  let fixture: ComponentFixture<NoticesComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    activatedRoute = new ActivatedRoute();
    TestBed.configureTestingModule({
      declarations: [
        NoticesComponent,

        LiturgicalDatesComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        AppComponent,
        { provide: AppDateService, useValue: new AppDateService(activatedRoute) },
        LocalizationService,
        LiturgicalYearService
      ]
    });

    fixture = TestBed.createComponent(NoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
