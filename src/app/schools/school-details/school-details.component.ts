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
    console.log('school detail blah', this.schoolDetail);
  }
}
