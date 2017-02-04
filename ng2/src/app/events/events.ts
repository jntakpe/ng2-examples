import {Component} from '@angular/core';
@Component({
  selector: 'app-events',
  template: `
    <button (click)="toggleHide()" class="btn">Hide message</button>
    <h1 [hidden]="isHidden">Message caché ?</h1>
    <input type="text" (keydown.space)="onSpacePress($event)">
  `
})
export class EventsComponent {
  isHidden = false;

  toggleHide() {
    this.isHidden = !this.isHidden;
  }

  onSpacePress(event) {
    event.preventDefault();
    console.log(event);
  }
}
