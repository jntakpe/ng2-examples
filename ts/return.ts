import { Days } from './enum';

function isWeekEnd(day: Days): boolean {
    return day === Days.Saturday || day === Days.Sunday;
}

function setAge(age: number): void {
    this.user.age = age;
}

console.log(isWeekEnd(Days.Monday));

