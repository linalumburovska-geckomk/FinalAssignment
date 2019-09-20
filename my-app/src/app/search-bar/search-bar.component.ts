import { Component, OnInit } from '@angular/core';
import {CitiesService} from '../cities.service';
import {Observable, of} from 'rxjs';
import {catchError, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchFailed = false;

  constructor(private citiesService: CitiesService) {
  }

  search = (text$: Observable<string>): any =>
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

  searchNewCity = (): any => {
    const inputValue = (document.getElementById('typeahead-http') as HTMLInputElement).value;
    console.log(inputValue);
  }

  ngOnInit(): void {
  }

}
