import {CORE_DIRECTIVES, Component, View} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';

let styles   = require('./signup.css');
let template = require('./signup.html');

@Component({
  selector: 'signup'
})
@View({
  directives: [ RouterLink, CORE_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Signup {
  constructor(public router: Router) {
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
    .then((response:any) => {
      localStorage.setItem('jwt', response.id_token);
      this.router.navigateByUrl('/home');
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });
  }

  login(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/login');
  }

}
