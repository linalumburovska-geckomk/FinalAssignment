import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
class SearchBarComponent implements OnInit {

  userData: any[] = [];

  lastkeydown1 = 0;

  constructor(private citiesService: CitiesService) {
    this.citiesService.getAllCountries().subscribe(
      data => {
        Object.assign(this.userData, data);
      },
      error => {
        console.log('Something wrong here');
      });
  }

  getUserIdsFirstWay($event) {
    const userId = (document.getElementById('userIdFirstWay') as HTMLInputElement).value;
    this.userData = [];

    if (userId.length > 2) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userData = this.searchFromArray(this.userData, userId);
      }
    }
  }

  searchFromArray(arr, regex) {
    const matches = []
    let i = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  }

  ngOnInit(): void {
  }
}

export default SearchBarComponent;
