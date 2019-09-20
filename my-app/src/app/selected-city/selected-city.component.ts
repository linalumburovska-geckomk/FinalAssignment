import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../cities.service';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.css']
})
export class SelectedCityComponent implements OnInit {

  name: string;
  country: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  windSpeed: number;
  weatherMain: string;
  weatherDesc: string;
  cityName: string;

  constructor(private cityService: CitiesService) { }

  ngOnInit() {
    this.cityName = window.location.pathname.split('/')[2];
    this.getWeather(this.cityName);
  }

  getWeather = (cityName: string): any => {
    this.cityService.getCityByParameter(cityName)
      .subscribe((cityData: any) => {
        this.country = cityData.sys.country;
        this.temp = cityData.main.temp;
        this.maxTemp = cityData.main.temp_max;
        this.minTemp = cityData.main.temp_min;
        this.humidity = cityData.main.humidity;
        this.windSpeed = cityData.wind.speed;
        this.weatherMain = cityData.weather[0].main;
        this.weatherDesc = cityData.weather[0].description;
        // const imgUrl: string = 'http://openweathermap.org/img/wn/' + cityData.weather[0].icon + '@2x.png';
        // document.getElementById('weatherImage').setAttribute('src', imgUrl);
      });
  }
}
