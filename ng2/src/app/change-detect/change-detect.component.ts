import {Component} from '@angular/core';
@Component({
  selector: 'app-change-detect',
  template: `
    <app-interpolation></app-interpolation>
    <h2>{{seconds}} s depuis le chargement</h2>
  `
})
export class ChangeDetectComponent {
  seconds = 0;

  constructor() {
    setInterval(() => this.seconds++, 1000);
  }
}
