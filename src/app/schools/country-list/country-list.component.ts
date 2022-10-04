import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from './country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  selectedRowIndex: number = -1;
  @Output() country = new EventEmitter<Country>();

  constructor() {}

  countries: Country[] = [
    { name: 'united+states', display: 'United States' },
    { name: 'korea', display: 'Korea' },
    { name: 'greece', display: 'Greece' },
  ];

  gotClicked(event: any, item: Country): void {
    this.country.emit(item);
    this.selectedRowIndex = event;
  }

  ngOnInit(): void {}
}
