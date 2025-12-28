import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConfigComponent } from './main-config.component';
import { provideRouter } from '@angular/router';
import { testRoutes } from 'src/app/utils-for-test/routes-for-testing.spec';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RosaryTranslateModule } from 'src/app/modules/rosary-translate.module';

describe('MainConfigComponent', () => {
  let component: MainConfigComponent;
  let fixture: ComponentFixture<MainConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(testRoutes)
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConfigComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
