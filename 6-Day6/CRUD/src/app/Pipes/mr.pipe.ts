import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mr',
  standalone: true
})
export class MrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'MR. ' + value;
  }

}
