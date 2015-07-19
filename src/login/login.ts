/// <reference path="../typings/custom.d.ts" />

import {Component, View, Http, Headers} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';


let styles   = require('./login.css');
let template = require('./login.html');


@Component({
  selector: 'login'
})
@View({
  styles: [ styles ],
  template: template,
  directives: [RouterLink]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3001/sessions/create',
      JSON.stringify({
        username, password
      }),
      { 
        headers: headers
      }
    )
    .toRx()
    .map(status)
    .map(json)
    .subscribe(
      response => {
        localStorage.setItem('jwt', response.id_token);
        this.router.parent.navigate('/home');
      },
      error => {
        alert(error.message);
        console.log(error.message);
      }
    );
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigate('/signup');
  }
}
