import { TestBed } from '@angular/core/testing';

import { XlfReaderTranslateLoader } from './xlf-reader-translate-loader';

describe('XlfReaderTranslateLoader', () => {
  let service: XlfReaderTranslateLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XlfReaderTranslateLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
