import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.css']
})
class CurrentCityComponent implements OnInit {

  name: string;
  country: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  windSpeed: number;
  weatherMain: string;
  weatherDesc: string;

  constructor(private cityService: CitiesService) {
  }

  getCityByParameter = (): void => {
    this.cityService.getCityByParameter('Skopje')
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
        const imgUrl: string  = 'http://openweathermap.org/img/wn/' +  cityData.weather[0].icon + '@2x.png';
        document.getElementById('weatherImage').setAttribute('src', imgUrl);
      });
  }

  ngOnInit() {
    this.getCityByParameter();
  }

}

export default CurrentCityComponent;
