import { Component, OnInit } from '@angular/core';
import { TableDataService } from './table-data.service';
import { College } from './table-data';
import { Observable, map } from 'rxjs';
import { orderByPipe } from './order-by.pipe';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent implements OnInit {
  colleges$!: Observable<College[]>;
  collegesSorted$!: Observable<Array<College>>;

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

  getColleges(): void {
    this.colleges$ = this.tableDataService.getColleges();

    //https://stackoverflow.com/questions/41224749/angular-2-sort-list-from-observable
    this.tableDataService
      .getColleges()
      .pipe(
        map((colleges$) =>
          colleges$.filter((college) => college.name === 'Aegean University')
        )
      )
      .subscribe((res) => console.log('Dude', res));

    this.collegesSorted$ = this.tableDataService.getColleges().pipe(
      map((name) => {
        name.sort((a, b) => {
          return a < b ? -1 : 1;
        });
        return name;
      })
    );

    // this.tableDataService.getColleges2().subscribe((res) => console.log(res));
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

        y = rows[i + 1].getElementsByTagName('td')[0];
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
