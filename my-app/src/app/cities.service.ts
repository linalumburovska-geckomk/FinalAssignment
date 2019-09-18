import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  basicUrl: string;
  appid: string;

  constructor(private http: HttpClient) {
   this.basicUrl = 'api.openweathermap.org/data/2.5/weather?q=';
   this.appid = 'f05d5db558629ff2ea35f683c7ccc7e5';
  }

  getCityData = ():Observable<Object[]> => {
    return of([{
      name: "Bitola"
    }]);
  };

  getCityByParameter = (cityName: string) => {
    return of(this.http.get(this.basicUrl+cityName+"&appid="+this.appid).pipe());
  }

}
