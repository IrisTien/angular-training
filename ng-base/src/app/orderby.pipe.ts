import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(value: Array<unknown>, ...args: unknown[]):
    Array<unknown> {
    if (args.length == 0 || args[0] == 'asc') {
      return value.sort();
    }
    else if (args[0] == 'desc') {
      return value.sort().reverse();
    }
    return value;
  }
}
