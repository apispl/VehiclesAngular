import { TestBed } from '@angular/core/testing';

import { VehiclesClientService } from './vehicles-client.service';

describe('VehiclesClientService', () => {
  let service: VehiclesClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
