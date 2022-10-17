import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Country } from 'src/app/shared/dtos';
import { CountryListService } from './country-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit, OnDestroy {
  countries$!: Observable<Country[]>;
  selectedRowIndex: number = -1;
  @Output() countryListCountry = new EventEmitter<Country>();

  constructor(private countryListService: CountryListService) {}

  selectCountry(index: number, item: Country, event: Event): void {
    this.countryListCountry.emit(item);
    this.selectedRowIndex = index;
  }

  getCountries(): void {
    this.countries$ = this.countryListService.getCountries();
  }

  ngOnInit(): void {
    this.getCountries();
  }

  ngOnDestroy(): void {
    this.countryListService.getCountries();
  }
}
