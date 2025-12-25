import { TestBed } from '@angular/core/testing';

import { SupportedLanguagesService } from './supported-languages.service';

describe('SupportedLanguagesService', () => {
  let service: SupportedLanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportedLanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
