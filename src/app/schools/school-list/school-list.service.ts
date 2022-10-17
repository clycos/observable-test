import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Country, School } from 'src/app/shared/dtos';

@Injectable({
  providedIn: 'root',
})
export class SchoolListService {
  // endpoint obtained from https://apipheny.io/free-api/

  constructor(private http: HttpClient) {}

  getColleges(country: Country): Observable<School[]> {
    let endpoint = 'http://universities.hipolabs.com/search?country=';
    if (country) {
      endpoint += country.name;
      return <Observable<School[]>>this.http.get(endpoint);
    }

    return EMPTY;
  }
}
