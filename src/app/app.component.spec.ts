import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { RosaryTranslateModule } from './modules/rosary-translate.module';
import { testRoutes } from './utils-for-test/routes-for-testing.spec';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RosaryTranslateModule
      ],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(testRoutes)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title key 'Rosary Beads'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // IMPORTANT - this is testing that the correct key is returned, not the actual text in a particular language
    expect(app.title).toEqual('Rosary Beads');
  });
});
