import { Component } from '@angular/core';
import { Country } from './country-list/country';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
})
export class SchoolsComponent {
  country!: Country;
  constructor() {}

  getCountry(country: Country): void {
    this.country = country;
  }
}
