import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.css']
})
export class CurrentCityComponent implements OnInit {

  name: string;
  country: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  windSpeed: number;
  weatherMain: string;
  weatherDesc: string;
  time: string;
  imgUrl: string;

  constructor(private cityService: CitiesService) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      this.getWeather(lat, long);
    });
  }

  getWeather = (lat: number, long: number): any => {
    this.cityService.getTmpLocation(lat, long)
      .subscribe((name: any ) => {
        this.cityService.getCityByParameter(name.name)
          .subscribe((cityData: any) => {
            this.name = cityData.name;
            this.country = cityData.sys.country;
            this.temp = cityData.main.temp;
            this.maxTemp = cityData.main.temp_max;
            this.minTemp = cityData.main.temp_min;
            this.humidity = cityData.main.humidity;
            this.windSpeed = cityData.wind.speed;
            this.weatherMain = cityData.weather[0].main;
            this.weatherDesc = cityData.weather[0].description;
            this.time = cityData.dt;
            this.imgUrl = 'http://openweathermap.org/img/wn/' +  cityData.weather[0].icon + '@2x.png';
          });
      });
    // Unsubscribe
    setTimeout(() => {
      this.cityService.getTmpLocation(lat, long).unsubscribe();
    }, 1000);
  }
}
