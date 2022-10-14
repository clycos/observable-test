import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { School } from '../school-list';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent {
  constructor() {}

  schoolDetail: School = {
    alpha_two_code: 'US',
    country: 'United States',
    domains: ['lcc.edu'],
    name: 'Lansing Community College',
    state_province: 'MI',
    web_pages: ['https://www.lcc.edu'],
  };
}
