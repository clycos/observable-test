import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { College } from './table-data';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  // endpoint obtained from https://apipheny.io/free-api/

  endpoint = 'http://universities.hipolabs.com/search?country=Greece';
  constructor(private http: HttpClient) {}

  getColleges(): Observable<College[]> {
    return <Observable<College[]>>this.http.get(this.endpoint);
  }
}
