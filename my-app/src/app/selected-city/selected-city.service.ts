import { Injectable } from '@angular/core';
import { CitiesService } from '../cities.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SelectedCityService {

  constructor(private cityService: CitiesService) {
  }

  getTomorrowWeather = (cityName: string): Observable<object> => {
    const PARAMS = new HttpParams();
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.cityService.getHttpClient().get(this.cityService.basicUrl + 'forecast?', {
      params: PARAMS.set('q', cityName).set('appid', this.cityService.appid).set('units', 'metric')
    }).pipe();
  }
}
