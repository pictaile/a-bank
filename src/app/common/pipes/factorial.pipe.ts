import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    const itter = args;
    if (value <= 0) return 0;

    let result = 1;
    for (let i = 1; i <= value; i++) {
      result = result * itter;
    }
    return result;
  }

}
