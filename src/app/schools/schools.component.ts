import { Component, Input } from '@angular/core';
import { Country, School } from '../shared/dtos';

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
