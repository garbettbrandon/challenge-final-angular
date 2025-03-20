import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtml',
})
export class NamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {}
}
