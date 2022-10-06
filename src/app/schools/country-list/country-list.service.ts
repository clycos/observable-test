import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryListService {
  countries: Country[] = [
    { name: 'brazil', display: 'Brazil' },
    { name: 'canada', display: 'Canada' },
    { name: 'france', display: 'France' },
    { name: 'greece', display: 'Greece' },
    { name: 'united+states', display: 'United States' },
  ];

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return <Observable<Country[]>>of(this.countries);
  }
}
