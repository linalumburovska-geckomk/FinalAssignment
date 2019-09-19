import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import {Observable, of} from 'rxjs';
import {catchError, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
class SearchBarComponent implements OnInit {

  searchFailed = false;

  constructor(private citiesService: CitiesService) {
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      distinctUntilChanged(),
      switchMap(term =>
        this.citiesService.getAllCities(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
    )

  ngOnInit(): void {
  }
}

export default SearchBarComponent;
