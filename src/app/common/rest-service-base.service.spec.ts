import { TestBed, inject } from '@angular/core/testing';

import { RestServiceBase } from './rest-service-base.service';

describe('RestServiceBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestServiceBase]
    });
  });

  it('should be created', inject([RestServiceBase], (service: RestServiceBase) => {
    expect(service).toBeTruthy();
  }));
});
