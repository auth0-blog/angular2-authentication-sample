import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import { Router } from 'angular2/router';

import {status, text} from '../utils/fetch'

let styles = require('./home.css');
let template = require('./home.html');


@Component({
  selector: 'home'
})
@View({
  directives: [CORE_DIRECTIVES],
  template: template,
  styles: [styles]
})
export class Home {
  jwt:string;
  decodedJwt:string;
  response:string;
  api:string;

  constructor(public router:Router) {
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigate(['/login']);
  }

  callAnonymousApi() {
    this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  _callApi(type, url) {
    this.response = null;
    this.api = type;
    window.fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.jwt
        }
      })
      .then(status)
      .then(text)
      .then((response) => {
        this.response = response;
      })
      .catch((error) => {
        this.response = error.message;
      });
  }
}
