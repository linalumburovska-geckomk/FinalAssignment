import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getHttpClient = (): any => {
    return this.http;
  }

  getCityByParameter = (cityName: string): any => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basicUrl + 'weather?q=+' + cityName + '&appid=' + this.appid + '&units=metric', {headers});
  }
}
