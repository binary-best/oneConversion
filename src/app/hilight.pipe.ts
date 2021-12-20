import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hilight'
})
export class HilightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
