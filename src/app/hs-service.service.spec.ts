/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HsServiceService } from './hs-service.service';

describe('Service: HsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HsServiceService]
    });
  });

  it('should ...', inject([HsServiceService], (service: HsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
