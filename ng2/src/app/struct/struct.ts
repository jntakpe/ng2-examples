import {Component} from '@angular/core';

@Component({
  selector: 'app-struct',
  template: `
    <div *ngIf="colors.length > 0">
      <h2>Colors</h2>
      <ul>
        <li *ngFor="let color of colors; let i = index;">{{i}} - {{color}}</li>
      </ul>
    </div>
  `
})
export class StructComponent {
  colors: string[] = ['red', 'blue', 'green', 'orange', 'purple'];
}
