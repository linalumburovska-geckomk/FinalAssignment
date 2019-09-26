import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchFailed = false;

  constructor(private searchBarService: SearchBarService) {
  }

  search = (text$: Observable<string>): Observable<any> =>
    text$.pipe(
      distinctUntilChanged(),
      switchMap(term =>
        this.searchBarService.getAllCities(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
    )

  searchNewCity = (): string => {
    const inputValue = (document.getElementById('typeahead-http') as HTMLInputElement).value;
    return inputValue;
  }
}
