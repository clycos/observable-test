import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { School } from '../school-list';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent implements OnChanges {
  schoolDetail!: School;
  @Input() schoolDetailSchool!: School;

  constructor() {}

  //https://stackoverflow.com/questions/50205502/angular-cannot-read-property-of-undefined-in-component-form

  ngOnChanges(changes: SimpleChanges): void {
    this.schoolDetail = this.schoolDetailSchool;
  }
}
