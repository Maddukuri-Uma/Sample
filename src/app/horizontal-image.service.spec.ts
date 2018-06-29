/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HorizontalImageService } from './horizontal-image.service';

describe('HorizontalImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorizontalImageService]
    });
  });

  it('should ...', inject([HorizontalImageService], (service: HorizontalImageService) => {
    expect(service).toBeTruthy();
  }));
});
