import { TestBed } from '@angular/core/testing';

import { RemembermeGuardService } from './rememberme-guard.service';

describe('RemembermeGuardService', () => {
  let service: RemembermeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemembermeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
