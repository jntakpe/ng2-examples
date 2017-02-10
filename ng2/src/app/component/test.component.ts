import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div [style.color]="selectedColor">
      <div log logText="First logging text" username="jntakpe" color="blue">Log directive activated</div>
      <app-item *ngFor="let color of colors" (itemSelector)="selectColor($event)" [color]="color"></app-item>
    </div>
  `
})
export class TestComponent {

  selectedColor: string;

  colors: string[] = ['red', 'blue', 'yellow', 'orange', 'green'];

  selectColor(color) {
    this.selectedColor = color;
  }
}
