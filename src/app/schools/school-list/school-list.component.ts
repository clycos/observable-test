import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Input,
  SimpleChanges,
} from '@angular/core';
import { SchoolListService } from './school-list.service';
import { School } from './school-list';
import { Observable, map } from 'rxjs';
import { Country } from '../country-list/country';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css'],
})
export class SchoolListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() country!: Country;

  colleges$!: Observable<School[]>;
  selectedRowIndex: number = -1;
  showSort: string = 'asc';
  tableSmall: boolean = false;
  tableSize: string = 'shrink';

  constructor(private schoolListService: SchoolListService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.showSort = 'asc';
    this.getColleges();
    this.selectedRowIndex = -1;
  }

  ngOnDestroy(): void {
    this.schoolListService.getColleges(this.country);
  }

  sortBy(a: School, b: School): number {
    let x: number = 0;
    if (a.name < b.name) x = -1;
    if (a.name > b.name) x = 1;
    return x;
  }

  setTableSmall(): void {
    this.tableSmall = !this.tableSmall;
    this.tableSize =
      this.tableSize === 'enlarge'
        ? (this.tableSize = 'shrink')
        : (this.tableSize = 'enlarge');
  }
  // remove dups - https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // http://blog.jeremyfairbank.com/javascript/javascript-es7-function-bind-syntax/

  getColleges(): void {
    this.colleges$ = this.schoolListService.getColleges(this.country).pipe(
      map((colleges) =>
        [...new Map(colleges.map((m) => [m.name, m])).values()]
          .slice(0, 15) //slicing to limit results for testing
          .sort(this.sortBy)
      )
    );
  }

  gotClicked(event: any, item: any): void {
    console.log('event', event);
    console.log('item', item);

    this.selectedRowIndex = event;
  }

  sortTableRowsByColumn(table: HTMLTableElement, columnIndex: number): void {
    const rows: any = Array.from(table.querySelectorAll(':scope > tbody > tr'));

    rows.sort(
      (
        x: { cells: { textContent: string }[] },
        y: { cells: { textContent: string }[] }
      ) => {
        const xValue = x.cells[columnIndex].textContent.toLowerCase();
        const yValue = y.cells[columnIndex].textContent.toLowerCase();

        if (xValue < yValue || xValue > yValue) {
          return -1;
        }
      }
    );

    for (let row of rows) {
      table.tBodies[0].appendChild(row);
    }
  }

  sortTable(ev: Event): void {
    const th: HTMLTableElement = <HTMLTableElement>ev.currentTarget;
    const table: HTMLTableElement = th.closest('table') as HTMLTableElement;
    const thIndex: number = Array.from(th.parentElement!.children).indexOf(th);

    this.sortTableRowsByColumn(table, thIndex);

    const allTh: NodeListOf<HTMLTableElement> = table.querySelectorAll(
      ':scope > thead > tr > th'
    );

    this.showSort = this.showSort === 'asc' ? 'desc' : 'asc';
  }
}
