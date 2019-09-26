import { Component, OnDestroy, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SelectedCityService } from './selected-city.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-selected-city',
  templateUrl: './selected-city.component.html',
  styleUrls: ['./selected-city.component.css']
})
export class SelectedCityComponent implements OnInit, OnDestroy {

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
  imgUrl: string;
  tomorrowTemp: number;
  tomorrowMaxTemp: number;
  tomorrowMinTemp: number;
  tomorrowHumidity: number;
  tomorrowWindSpeed: number;
  tomorrowWeatherMain: string;
  tomorrowWeatherDesc: string;
  tomorrowClouds: string;
  tomorrowImgUrl: string;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private cityService: CitiesService,
    private location: Location,
    private route: ActivatedRoute,
    private selectedCityService: SelectedCityService
  ) { }

  ngOnInit() {
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    this.getWeather(this.cityName);
    this.getTomorrowWeather(this.cityName);
  }

  getWeather = (cityName: string): any => {
    this.cityService.getCityByParameter(cityName)
      .pipe(takeUntil(this.unsubscribe$))
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
        this.time = cityData.dt;
        this.imgUrl = 'http://openweathermap.org/img/wn/' + cityData.weather[0].icon + '@2x.png';
      });
  }

  getTomorrowWeather = (cityName: string): any => {
    this.selectedCityService.getTomorrowWeather(cityName)
      .pipe(takeUntil(this.unsubscribe$))
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
        this.tomorrowImgUrl = 'http://openweathermap.org/img/wn/' + getTomorrowData.weather[0].icon + '@2x.png';
      });
  }

  back = (): void => {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
