import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { WeatherModel } from '../weather.model';
import {from} from 'rxjs';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.css']
})
class CurrentCityComponent implements OnInit {

  cityData: WeatherModel;

  constructor(private cityService: CitiesService) {
  }

  // getCityData = (): void => {
  //   this.cityService.getCityData()
  //     .subscribe(cityData => this.cityData = cityData);
  // }

  getCityByParameter = (): void => {
    this.cityService.getCityByParameter('Paris')
      .subscribe((cityData) => this.cityData = cityData);
  }

  ngOnInit() {
    this.getCityByParameter();
  }

}

export default CurrentCityComponent;
