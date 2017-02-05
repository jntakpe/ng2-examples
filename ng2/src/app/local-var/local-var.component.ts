import {Component} from '@angular/core';

@Component({
  selector: 'app-local-var',
  template: `
    <input type="text" #name>
    {{ name.value }}
    <button (click)="name.focus()">Focus the input</button>
  `
})
export class LocalVarComponent {

}
