import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[log]',
  inputs: ['text: logText', 'username']
})
export class LogDirective extends OnInit {

  @Input() color: string;

  ngOnInit(): void {
    console.log(this.color);
  }

  set text(value) {
    console.log(value);
  }

  set username(value) {
    console.log(`Bonjour ${value}`);
  }

}
