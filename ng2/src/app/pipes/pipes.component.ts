import {Component} from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-pipes',
  template: `
    <p>{{users}}</p>
    <p>{{users | json}}</p>
    <p>{{users | slice:0:2 | json}}</p>
    <p>{{ 'Formation Angular' | slice:0:9}}</p> <!-- Formation -->
    <p>{{ 'Formation Angular' | slice:-7}}</p> <!-- Angular -->
    <p>{{ 'Formation Angular' | uppercase}}</p> <!-- FORMATION ANGULAR -->
    <p>{{ 12345 | number }}</p> <!-- 12,345 -->
    <p>{{ 12345 | number:'9.' }}</p> <!-- 000,012,345 -->
    <p>{{ 12345 | number:'.2' }}</p> <!-- 12,345.00 -->
    <p>{{ 12345.14 | number:'.1-1' }}</p> <!-- 12,345.1 -->
    <p>{{ 12345.16 | number:'.1-1' }}</p> <!-- 12,345.2 -->
    <p>{{ 0.8 | percent }}</p> <!-- 80% -->
    <p>{{ 0.8 | percent:'.3' }}</p> <!-- 80.000% -->
    <p>{{ 20.8 | currency:'EUR' }}</p> <!-- EUR20.80 -->
    <p>{{ 20.8 | currency:'USD':true }}</p> <!-- $20.80 -->
    <p>{{ 20.8 | currency:'USD':true:'.3' }}</p> <!-- $20.800 -->
    <p>{{ today | date:'dd/MM/yyyy'}}</p> <!-- 05/02/2017 -->
    <p>{{ today | date:'longDate'}}</p> <!-- February 5, 2017 -->
    <p>{{ today | date:'HH:mm:ss'}}</p> <!-- 13:48:43 -->
    <p>{{ today | date:'shortTime'}}</p> <!-- 1:48 PM -->
    <p> {{usersName$ | async}}</p>
    <p> {{today | fromNow}}</p>
  `
})
export class PipesComponent {
  users: any[] = [
    {name: 'Pierre', gender: 'male', skills: ['Java', 'JS', 'Angular']},
    {name: 'Paul', gender: 'male', skills: ['MongoDB', 'JS', 'jQuery']},
    {name: 'Marie', gender: 'female', skills: ['C++', 'DB', 'Redis']},
    {name: 'Julie', gender: 'female', skills: ['Angular', 'React', 'JavaEE']}
  ];
  today: Date = new Date();
  usersName$: Observable<string>;

  constructor() {
    this.usersName$ = Observable.zip(Observable.timer(0, 1000), Observable.from(this.users).repeat(100).map(u => u.name), (t, n) => n);
  }
}
