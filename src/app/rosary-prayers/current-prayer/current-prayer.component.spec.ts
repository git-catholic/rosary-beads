import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndComponent } from 'src/app/prayers/end/end.component';
import { CurrentPrayerComponent } from './current-prayer.component';

describe('CurrentPrayerComponent', () => {
  let component: CurrentPrayerComponent;
  let fixture: ComponentFixture<CurrentPrayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CurrentPrayerComponent,

        EndComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPrayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
