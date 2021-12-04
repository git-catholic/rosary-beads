import { TestBed } from '@angular/core/testing';
import { MysteryGlorious } from '../rosary-prayers/holy-rosary/mysteries/mystery-glorious';

import { BeadGroupLoaderService } from './bead-group-loader.service';
import { LocalizationService } from './localization.service';

describe('BeadGroupLoaderService', () => {
  let service: BeadGroupLoaderService;
  let localizationUtil: LocalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalizationService
      ]
    });
    service = TestBed.inject(BeadGroupLoaderService);
    localizationUtil = TestBed.inject(LocalizationService);
  });

  it('should be created and display json sequence', () => {
    expect(service).toBeTruthy();
    const mystery = new MysteryGlorious(localizationUtil);
    const beads = service.loadHolyRosaryContemporary(mystery);
    expect(beads).toBeTruthy();
  });
});
