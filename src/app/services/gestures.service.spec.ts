import { TestBed } from '@angular/core/testing';

import { GesturesService } from './gestures.service';

describe('GesturesService', () => {
  let service: GesturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GesturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
