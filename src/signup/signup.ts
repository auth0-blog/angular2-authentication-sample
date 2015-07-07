/// <reference path="../../typings/tsd.d.ts" />

import {coreDirectives} from 'angular2/directives';
import {Component, View} from 'angular2/annotations';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';

let styles   = require('./signup.css');
let template = require('./signup.html');

@Component({
  selector: 'signup'
})
@View({
  directives: [RouterLink, coreDirectives],
  template:`<style>${styles}</style>\n${template}`

})
export class Signup {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  signup(event, username, password) {
    event.preventDefault();
    window.fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then(status)
    .then(json)
    .then((response) => {
      localStorage.setItem('jwt', response.id_token);
      this.router.navigate('/home');
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });
  }

  login(event) {
    event.preventDefault();
    this.router.parent.navigate('/login');
  }

}
