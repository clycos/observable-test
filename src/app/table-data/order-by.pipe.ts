import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe',
})
export class orderByPipe implements PipeTransform {
  transform(value: any, propName: string) {
    value = value || [];
    return value.sort(
      (a: { [x: string]: number }, b: { [x: string]: number }) => {
        if (a[propName] < b[propName]) {
          return -1;
        } else if (a[propName] === b[propName]) {
          return 0;
        } else if (a[propName] > b[propName]) {
          return 1;
        }
        // if(a[propName] > b[propName]) return 1
        // else return 1;
      }
    );
  }
}
