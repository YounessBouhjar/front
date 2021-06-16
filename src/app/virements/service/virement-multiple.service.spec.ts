import { TestBed } from '@angular/core/testing';

import { VirementMultipleService } from './virement-multiple.service';

describe('VirementMultipleService', () => {
  let service: VirementMultipleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirementMultipleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
