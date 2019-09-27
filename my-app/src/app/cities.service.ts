import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  basicUrl: string;
  appid: string;
  allCities: string;

  constructor(private http: HttpClient) {
    this.basicUrl = 'https://api.openweathermap.org/data/2.5/';
    this.appid = 'f05d5db558629ff2ea35f683c7ccc7e5';
    this.allCities = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities';
  }

  getHttpClient = (): HttpClient => {
    return this.http;
  }

  getCityByParameter = (cityName: string): Observable<object> => {
    const PARAMS = new HttpParams();
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basicUrl + 'weather?', {
      params: PARAMS.set('q', cityName).set('appid', this.appid).set('units', 'metric')
    }).pipe();
  }
}
