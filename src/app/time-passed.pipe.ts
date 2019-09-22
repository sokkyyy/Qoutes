import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): any {
    const today: Date = new Date();
    const todayWithNoMinutes: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(todayWithNoMinutes - value);
    const dateDifferenceInSeconds = dateDifference / 1000;
    const timePassed = +(dateDifferenceInSeconds / 86400).toFixed();

    if (value < todayWithNoMinutes && timePassed > 1) {
      return timePassed + ' days';
    } else {
      return 'Created Today';
    }
  }

}
