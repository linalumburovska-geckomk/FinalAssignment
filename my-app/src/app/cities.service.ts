import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const PARAMS = new HttpParams({
  fromObject: {
    limit: '10'
  }
});

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

  getAllCities(term: string): any {
    if (term === '') {
      return of([]);
    }
    return this.http.get(this.allCities, {params: PARAMS.set('namePrefix', term)}).pipe(
        map((response: any) => response.data.map(e => e.city))
      );
  }

  getCityByParameter = (cityName: string): any => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basicUrl + 'weather?q=+' + cityName + '&appid=' + this.appid + '&units=metric', {headers});
  }

  getTmpLocation = (lat: number, long: number): any => {
    return this.http.get(this.basicUrl + 'weather?lat=' + lat + '&lon=' + long + '&appid=' + this.appid);
  }

  getTomorrowWeather = (cityName: string): any => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basicUrl + 'forecast?q=+' + cityName + '&appid=' + this.appid + '&units=metric', {headers});
  }
}
