import { TestBed } from '@angular/core/testing';

import { CurrentCityService } from './current-city.service';

describe('CurrentCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentCityService = TestBed.get(CurrentCityService);
    expect(service).toBeTruthy();
  });
});
