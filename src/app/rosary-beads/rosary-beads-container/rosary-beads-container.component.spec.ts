import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RosaryBeadsContainerComponent } from './rosary-beads-container.component';

describe('RosaryBeadsContainerComponent', () => {
  let component: RosaryBeadsContainerComponent;
  let fixture: ComponentFixture<RosaryBeadsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RosaryBeadsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RosaryBeadsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
