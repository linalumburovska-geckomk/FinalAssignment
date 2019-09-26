import { Injectable } from '@angular/core';
import { CitiesService } from '../cities.service';
import {Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SearchBarService {

  constructor(private cityService: CitiesService) {
  }

  getAllCities(term: string): Observable<string[]> {
    const PARAMS = new HttpParams({
      fromObject: {
        limit: '10'
      }
    });
    if (term === '') {
      return of([]);
    }
    return this.cityService.getHttpClient().get(this.cityService.allCities, {params: PARAMS.set('namePrefix', term)}).pipe(
      map((response: any) => response.data.map(e => e.city))
    );
  }
}
