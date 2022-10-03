import { Component, OnInit } from '@angular/core';
import { TableDataService } from './table-data.service';
import { College } from './table-data';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  colleges$!: Observable<College[]>;
  selectedRowIndex: number = -1;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit(): void {
    this.getColleges();
  }

  sortBy(a: College, b: College): number {
    let x: number = 0;
    if (a.name < b.name) x = -1;
    if (a.name > b.name) x = 1;
    return x;
  }

  // remove dups - https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // http://blog.jeremyfairbank.com/javascript/javascript-es7-function-bind-syntax/

  getColleges(): void {
    // unmodified API
    // this.colleges$ = this.tableDataService.getColleges();

    // order by(use JS), allow dups
    // this.colleges$ = this.tableDataService
    //   .getColleges()
    //   .pipe(map((colleges) => colleges.sort(this.sortBy)));

    // order by(use JS) no dups(use orderByPipe)
    // this.colleges$ = this.tableDataService
    //   .getColleges()
    //   .pipe(
    //     map((colleges) => [
    //       ...new Map(colleges.map((m) => [m.name, m])).values(),
    //     ])
    //   );

    // order by(use JS) no dups(use JS)
    this.colleges$ = this.tableDataService
      .getColleges()
      .pipe(
        map((colleges) =>
          [...new Map(colleges.map((m) => [m.name, m])).values()].sort(
            this.sortBy
          )
        )
      );
  }

  gotClicked(event: any, item: any): void {
    console.log(item.name);
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
        x = rows[i].getElementsByTagName('TD')[0];

        y = rows[i + 1].getElementsByTagName('TD')[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode?.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
}
