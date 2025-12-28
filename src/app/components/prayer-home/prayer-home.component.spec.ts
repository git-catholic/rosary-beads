import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerHomeComponent } from './prayer-home.component';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { testRoutes } from 'src/app/utils-for-test/routes-for-testing.spec';

describe('PrayerHomeComponent', () => {
  let component: PrayerHomeComponent;
  let fixture: ComponentFixture<PrayerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RosaryTranslateModule],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(testRoutes)
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
