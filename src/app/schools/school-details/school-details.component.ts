import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { School } from '../school-list/school-list';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent implements OnInit, OnChanges {
  schoolDetail!: School;
  @Input() schoolDetailSchool!: School;

  constructor() {}

  //https://stackoverflow.com/questions/50205502/angular-cannot-read-property-of-undefined-in-component-form

  ngOnInit(): void {
    this.schoolDetail = {
      alpha_two_code: '',
      country: '',
      domains: [''],
      name: '',
      state_province: '',
      web_pages: [''],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.schoolDetail = this.schoolDetailSchool;
  }
}
