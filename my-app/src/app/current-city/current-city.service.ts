import { Injectable } from '@angular/core';
import { CitiesService } from '../cities.service';

@Injectable()
export class CurrentCityService {
  constructor(private cityService: CitiesService) {
  }

  getTmpLocation = (lat: number, long: number): any => {
    return this.cityService.getHttpClient()
      .get(this.cityService.basicUrl + 'weather?lat=' + lat + '&lon=' + long + '&appid=' + this.cityService.appid);
  }
}
