import { TestBed } from '@angular/core/testing';

import { DemochildService } from './demochild.service';

describe('DemochildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemochildService = TestBed.get(DemochildService);
    expect(service).toBeTruthy();
  });
});
