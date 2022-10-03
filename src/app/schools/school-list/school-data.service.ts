import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from './school-list';

@Injectable({
  providedIn: 'root',
})
export class SchoolDataService {
  // endpoint obtained from https://apipheny.io/free-api/

  endpoint =
    'http://universities.hipolabs.com/search?country=United+States&name=michigan';
  constructor(private http: HttpClient) {}

  getColleges(): Observable<School[]> {
    return <Observable<School[]>>this.http.get(this.endpoint);
  }
}
