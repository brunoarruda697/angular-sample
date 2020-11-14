import { User } from './shared/user';
import { LoginService } from './service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new User());
  }

  createForm(user: User) {
    this.user = this.formBuilder.group({
      username: [user.username, [Validators.required]],
      password: [user.password, [Validators.required]],
    });
  }

  get f() { return this.user.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.user.valid) {
      this.submitted = false;
      console.log('é valido');
      this.user.reset();
      return;
    }
    // esperando os metodos do service
    // this.loginService.
    console.log(this.user.value);
  }
}
