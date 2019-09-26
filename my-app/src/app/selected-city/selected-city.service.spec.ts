import { TestBed } from '@angular/core/testing';

import { SelectedCityService } from './selected-city.service';

describe('SelectedCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedCityService = TestBed.get(SelectedCityService);
    expect(service).toBeTruthy();
  });
});
