import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoMinutes: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDifference = Math.abs(todayWithNoMinutes - value);
    const dateDifferenceInSeconds = dateDifference / 1000;
    const timePassed = +(dateDifferenceInSeconds / 86400).toFixed();

    if (value < todayWithNoMinutes) {
      return timePassed;
    } else {
      return 0;
    }
  }

}
