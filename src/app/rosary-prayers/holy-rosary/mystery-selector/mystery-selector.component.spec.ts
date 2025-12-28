import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MysterySelectorComponent } from './mystery-selector.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';
import { testRoutes } from 'src/app/utils-for-test/routes-for-testing.spec';

describe('MysterySelectorComponent', () => {
  let component: MysterySelectorComponent;
  let fixture: ComponentFixture<MysterySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(testRoutes)
      ]
    });

    fixture = TestBed.createComponent(MysterySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
