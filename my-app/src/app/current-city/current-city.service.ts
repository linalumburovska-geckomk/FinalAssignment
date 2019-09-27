import { Injectable } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Observable } from 'rxjs';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class CurrentCityService {
  constructor(private cityService: CitiesService) {
  }

  getTmpLocation = (lat: number, long: number): Observable<object> => {
    const PARAMS = new HttpParams();
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.cityService.getHttpClient().get(this.cityService.basicUrl + 'weather?', {
      params: PARAMS.set('lat', String(lat)).set('lon', String(long)).set('appid', this.cityService.appid)
    }).pipe();
  }
}
