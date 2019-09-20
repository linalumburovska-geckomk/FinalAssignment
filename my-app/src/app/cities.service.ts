import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of} from 'rxjs';
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
  tmpLocation: string;
  getName: string;

  constructor(private http: HttpClient) {
    this.basicUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    this.appid = 'f05d5db558629ff2ea35f683c7ccc7e5';
    this.allCities = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities';
    this.tmpLocation = 'https://geoip-db.com/json/';
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
    return this.http.get(this.basicUrl + 'q=+' + cityName + '&appid=' + this.appid + '&units=metric', {headers});
  }

  getTmpLocation = (): any => {
    return this.http.get(this.tmpLocation).pipe(
      map((response: any) => response.city)
    );
  }
}
