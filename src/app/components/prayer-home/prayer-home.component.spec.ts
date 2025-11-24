import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerHomeComponent } from './prayer-home.component';

describe('HomeComponent', () => {
  let component: PrayerHomeComponent;
  let fixture: ComponentFixture<PrayerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerHomeComponent]
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
