import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivineMercyHomeComponent } from './divine-mercy-home.component';

describe('DivineMercyComponent', () => {
  let component: DivineMercyHomeComponent;
  let fixture: ComponentFixture<DivineMercyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivineMercyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivineMercyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
