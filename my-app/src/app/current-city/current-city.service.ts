import { Injectable } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Observable } from 'rxjs';

@Injectable()
export class CurrentCityService {
  constructor(private cityService: CitiesService) {
  }

  getTmpLocation = (lat: number, long: number): Observable<object> => {
    return this.cityService.getHttpClient()
      .get(this.cityService.basicUrl + 'weather?lat=' + lat + '&lon=' + long + '&appid=' + this.cityService.appid).pipe();
  }
}
