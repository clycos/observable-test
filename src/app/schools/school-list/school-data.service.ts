import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { School } from './school-list';
import { Country } from '../country-list/country';

@Injectable({
  providedIn: 'root',
})
export class SchoolDataService {
  // endpoint obtained from https://apipheny.io/free-api/

  constructor(private http: HttpClient) {}

  getColleges(country: Country): Observable<School[]> {
    let endpoint = 'http://universities.hipolabs.com/search?country=';
    if (country) {
      endpoint += country.name;
      console.log('endpoint', endpoint);
      return <Observable<School[]>>this.http.get(endpoint);
    }

    return EMPTY;
  }
}
