import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      password: formBuilder.control('', Validators.required)
    });
  }

  register() {
    console.log(this.loginForm.value);
  }

}
