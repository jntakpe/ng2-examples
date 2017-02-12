import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    const isKnowUser = (control: FormControl) => ['jntakpe', 'gpeel'].filter(v => v === control.value).length ? null : {unknownUser: true};
    this.loginForm = formBuilder.group({
      username: formBuilder.control('', [Validators.required, Validators.minLength(3), isKnowUser]),
      password: formBuilder.control('', Validators.required)
    });
    this.loginForm.valueChanges.subscribe(form => console.log(form));
    this.loginForm.get('username').valueChanges.subscribe(username => console.log(username));
  }

  register() {
    console.log(this.loginForm.value);
  }

}
