import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageRedirectComponent } from './language-redirect.component';

describe('LanguageRedirectComponent', () => {
  let component: LanguageRedirectComponent;
  let fixture: ComponentFixture<LanguageRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
