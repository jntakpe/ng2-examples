import {Component} from '@angular/core';
@Component({
  selector: 'app-binding',
  template: `
    <p [hidden]="isHidden" [textContent]="message" [style.color]="textColor"></p>
  `
})
export class BindingComponent {
  isHidden = false;
  message = 'Un texte changeant de couleur';
  textColor;

  constructor() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    let index = 0;
    setInterval(() => this.isHidden = !this.isHidden, 2000);
    setInterval(() => {
      this.textColor = colors[index];
      index = index === colors.length - 1 ? 0 : index + 1;
    }, 1000);
  }
}
