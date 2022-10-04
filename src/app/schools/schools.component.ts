import { Component, OnInit } from '@angular/core';
import { Country } from './country-list/country';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
})
export class SchoolsComponent implements OnInit {
  country?: Country;
  constructor() {}

  ngOnInit(): void {}

  getCountry(country: Country): void {
    this.country = country;
    console.log(this.country);
  }
}
