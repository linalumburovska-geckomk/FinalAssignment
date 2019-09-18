import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {WeatherModel} from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  basicUrl: string;
  appid: string;

  constructor(private http: HttpClient) {
   this.basicUrl = '/api.openweathermap.org/data/2.5/weather?';
   this.appid = 'f05d5db558629ff2ea35f683c7ccc7e5';
  }

  // getCityData = (): Observable<WeatherModel[]> => {
  //   return of([{
  //     name: 'Bitola'
  //   }]);
  // }

  getCityByParameter = (cityName: string): any => {
    return this.http.get<WeatherModel>(this.basicUrl + 'q=+' + cityName + '&appid=' + this.appid).pipe();
  }

}
