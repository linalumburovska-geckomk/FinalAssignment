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

  constructor(private cityService: CitiesService) {
  }

  search = (text$: Observable<string>): any =>
    text$.pipe(
      distinctUntilChanged(),
      switchMap(term =>
        this.cityService.getAllCities(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
    )

  searchNewCity = (): any => {
    const inputValue = (document.getElementById('typeahead-http') as HTMLInputElement).value;
    return inputValue;
  }

  ngOnInit(): void {
  }

}
