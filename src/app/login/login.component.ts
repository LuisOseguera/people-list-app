import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login( loginForm: NgForm ){

    const email = loginForm.value.email;
    const password = loginForm.value.password;

    this._loginService.login( email, password );
  }
}
