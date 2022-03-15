import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Listado de Personas'

  constructor(

    private _loginService: LoginService
  ) { }

  ngOnInit(): void {
      
    firebase.initializeApp({

      apiKey: "AIzaSyDjgrwV1zh7tkO4H-CgvFByuCTIUqYwOdA",
      authDomain: "people-list-15e69.firebaseapp.com",
    })
  }

  isAuthenticated(){

    return this._loginService.isAuthenticated();
  }

  exit(){

    this._loginService.logout();
  }
}