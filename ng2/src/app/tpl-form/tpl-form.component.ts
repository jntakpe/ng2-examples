import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tpl-form',
  templateUrl: './tpl-form.component.html',
  styleUrls: ['./tpl-form.component.css']
})
export class TplFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  register(formData: any) {
    console.log(formData);
  }

}
