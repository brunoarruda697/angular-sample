import { AuthenticationService } from './../services/authentication.service';
import { User } from './shared/user.model';
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

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AuthenticationService
  ) { }

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
      this.loginService.signIn(this.user.controls['username'].value, this.user.controls['password'].value);
      return;
    }
  }
}
