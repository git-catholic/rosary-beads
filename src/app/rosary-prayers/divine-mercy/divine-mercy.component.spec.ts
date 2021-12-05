import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivineMercyComponent } from './divine-mercy.component';

describe('DivineMercyComponent', () => {
  let component: DivineMercyComponent;
  let fixture: ComponentFixture<DivineMercyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivineMercyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivineMercyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
