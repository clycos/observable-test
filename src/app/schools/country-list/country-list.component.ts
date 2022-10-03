import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  constructor() {}

  countries = [
    { name: 'United States' },
    { name: 'Korea' },
    { name: 'Greece' },
  ];

  ngOnInit(): void {}
}
