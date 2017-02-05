import {Component} from '@angular/core';

@Component({
  selector: 'app-dir-tpl',
  template: `
    <button class="btn" [class.btn-success]="isSuccess">Success ?</button>
    <button class="btn" [ngClass]="{'btn-success': isSuccess, 'btn-lg': isSuccess}">Success or danger</button>
  `
})
export class DirTplComponent {
  isSuccess;

  constructor() {
    setInterval(() => this.isSuccess = !this.isSuccess, 2000);
  }
}
