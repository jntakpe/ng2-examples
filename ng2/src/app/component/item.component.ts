import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div>
      <h1>{{color}} item selector</h1>
      <button class="btn btn-success" (click)="selectItem()">Select {{color}} item</button>
    </div>
  `
})
export class ItemComponent {

  @Input() color: string;

  @Output() itemSelector = new EventEmitter<string>();

  selectItem(): void {
    this.itemSelector.emit(this.color);
  }
}
