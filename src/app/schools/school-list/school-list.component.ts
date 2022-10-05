import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { SchoolDataService } from './school-data.service';
import { School } from './school-list';
import { Observable, map } from 'rxjs';
import { Country } from '../country-list/country';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css'],
})
export class SchoolListComponent implements OnInit, OnChanges {
  @Input() country!: Country;

  colleges$!: Observable<School[]>;
  selectedRowIndex: number = -1;
  sortRow: boolean = true;
  tableSmall: boolean = false;
  tableSize: string = 'shrink';

  constructor(private schoolDataService: SchoolDataService) {}

  ngOnInit(): void {
    this.getColleges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getColleges();
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
    // unmodified API
    this.colleges$ = this.schoolDataService.getColleges(this.country);

    // order by(use JS), allow dups
    // this.colleges$ = this.schoolDataService
    //   .getColleges()
    //   .pipe(map((colleges) => colleges.sort(this.sortBy)));

    // order by(use JS) no dups(use orderByPipe)
    // this.colleges$ = this.schoolDataService
    //   .getColleges()
    //   .pipe(
    //     map((colleges) => [
    //       ...new Map(colleges.map((m) => [m.name, m])).values(),
    //     ])
    //   );

    // order by(use JS) no dups(use JS)
    // this.colleges$ = this.schoolDataService
    //   .getColleges(this.country)
    //   .pipe(
    //     map((colleges) =>
    //       [...new Map(colleges.map((m) => [m.name, m])).values()].sort(
    //         this.sortBy
    //       )
    //     )
    //   );
  }

  gotClicked(event: any, item: any): void {
    this.selectedRowIndex = event;
  }

  sortTable(): void {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('myTable') as HTMLTableElement;
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;

      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[0].innerHTML.toLowerCase();
        y = rows[i + 1].getElementsByTagName('TD')[0].innerHTML.toLowerCase();

        if ((this.sortRow && x < y) || (!this.sortRow && x > y)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode?.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    this.sortRow = !this.sortRow;
  }

  sortTableRowsByColumn(
    table: HTMLTableElement,
    columnIndex: number,
    ascending: boolean = true
  ): void {
    const rows = Array.from(table.querySelectorAll(':scope > tbody > tr'));

    for (let row of rows) {
      table.tBodies[0].appendChild(row);
    }
  }

  sortTable2(ev: Event): void {
    const th: HTMLTableCellElement = <HTMLTableCellElement>ev.currentTarget;

    const table: any = th.closest('table');
    console.log('table', table);

    const thIndex: number = Array.from(th.parentElement!.children).indexOf(th);

    const ascending = (th.dataset as any).sort != 'asc';

    this.sortTableRowsByColumn(table, thIndex, true);

    const allTh = table.querySelectorAll(':scope > thead > tr > th');
    for (let th2 of allTh) {
      delete th2.dataset['sort'];
    }

    th.dataset['sort'] = ascending ? 'asc' : 'desc';
  }
}
