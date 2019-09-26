import { Injectable } from '@angular/core';
import { CitiesService } from '../cities.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SelectedCityService {

  constructor(private cityService: CitiesService) {
  }

  getTomorrowWeather = (cityName: string): Observable<object> => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.cityService.getHttpClient()
      .get(this.cityService.basicUrl + 'forecast?q=+' + cityName + '&appid=' + this.cityService.appid + '&units=metric', {headers}).pipe();
  }
}
