import { Component } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.css']
})
class CurrentCityComponent {

  cityData: {};

  constructor(private cityService: CitiesService) {
  }

  getCityData = () : void => {
    this.cityService.getCityData()
      .subscribe(cityData => this.cityData = cityData);
  };

  getCityByParameter = () : void => {
    this.cityService.getCityByParameter('Bitola')
      .subscribe(cityData => this.cityData = cityData);
  }

  ngOnInit() {
    this.getCityByParameter();
  }

}

export default CurrentCityComponent;
