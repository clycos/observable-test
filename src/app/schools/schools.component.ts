import { Component, Input } from '@angular/core';
import { Country } from './country-list/country';
import { School } from './school-list/school-list';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
})
export class SchoolsComponent {
  schoolsCountry!: Country;
  schoolsDetail!: School;
  constructor() {}

  getCountry(country: Country): void {
    this.schoolsCountry = country;
  }

  setSchool(school: School): void {
    this.schoolsDetail = school;
  }
}
