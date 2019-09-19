import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  basicUrl: string;
  appid: string;

  constructor(private http: HttpClient) {
    this.basicUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    this.appid = 'f05d5db558629ff2ea35f683c7ccc7e5';
  }

  getCityByParameter = (cityName: string): any => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basicUrl + 'q=+' + cityName + '&appid=' + this.appid + '&units=metric', {headers});
  }

  getAllCountries = (): any => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get('https://api.printful.com/countries', { headers });
  }

}
