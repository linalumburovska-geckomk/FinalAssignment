import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
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
    this.basicUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    this.appid = 'f05d5db558629ff2ea35f683c7ccc7e5';
    this.allCities = 'https://en.wikipedia.org/w/api.php';
  }

  getAllCities(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.http.get(this.allCities, {params: PARAMS.set('search', term)}).pipe(
        map(response => response[1])
      );
  }


  getCityByParameter = (cityName: string): any => {
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.get(this.basicUrl + 'q=+' + cityName + '&appid=' + this.appid + '&units=metric', {headers});
  }

}
