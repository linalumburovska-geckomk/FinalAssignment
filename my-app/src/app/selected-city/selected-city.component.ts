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
  clouds: number;
  time: string;
  tomorrowTemp: number;
  tomorrowMaxTemp: number;
  tomorrowMinTemp: number;
  tomorrowHumidity: number;
  tomorrowWindSpeed: number;
  tomorrowWeatherMain: string;
  tomorrowWeatherDesc: string;
  tomorrowClouds: string;

  constructor(private cityService: CitiesService) { }

  ngOnInit() {
    this.cityName = window.location.pathname.split('/')[2];
    this.getWeather(this.cityName);
    this.getTomorrowWeather(this.cityName);
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
        this.clouds = cityData.clouds.all;
        this.time = this.convertTime(cityData.dt);
        const imgUrl: string = 'http://openweathermap.org/img/wn/' + cityData.weather[0].icon + '@2x.png';
        document.getElementById('selectedCity').setAttribute('src', imgUrl);
      });
  }

  getTomorrowWeather = (cityName: string): any => {
    this.cityService.getTomorrowWeather(cityName)
      .subscribe((cityData: any) => {
        const getTomorrowData = cityData.list[1];
        this.tomorrowTemp = getTomorrowData.main.temp;
        this.tomorrowMaxTemp = getTomorrowData.main.temp_max;
        this.tomorrowMinTemp = getTomorrowData.main.temp_min;
        this.tomorrowHumidity = getTomorrowData.main.humidity;
        this.tomorrowWindSpeed = getTomorrowData.wind.speed;
        this.tomorrowWeatherMain = getTomorrowData.weather[0].main;
        this.tomorrowWeatherDesc = getTomorrowData.weather[0].description;
        this.tomorrowClouds = getTomorrowData.clouds.all;
        const imgUrl: string = 'http://openweathermap.org/img/wn/' + getTomorrowData.weather[0].icon + '@2x.png';
        document.getElementById('tomorrowWeather').setAttribute('src', imgUrl);
      });
  }

  convertTime = (unixTimestamp: number): string => {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }
}
