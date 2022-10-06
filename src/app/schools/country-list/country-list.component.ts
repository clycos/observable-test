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
    { name: 'brazil', display: 'Brazil' },
    { name: 'canada', display: 'Canada' },
    { name: 'france', display: 'France' },
    { name: 'greece', display: 'Greece' },
    { name: 'united+states', display: 'United States' },
  ];

  selectCountry(event: any, item: Country): void {
    this.country.emit(item);
    this.selectedRowIndex = event;
  }

  ngOnInit(): void {}
}
