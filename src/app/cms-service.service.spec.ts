import { TestBed } from '@angular/core/testing';

import { CMSServiceService } from './cms-service.service';

describe('CMSServiceService', () => {
  let service: CMSServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CMSServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
