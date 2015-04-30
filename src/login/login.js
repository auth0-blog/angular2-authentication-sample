import {Component, View, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {status, json} from '../utils/fetch'
import { Router, RouterLink } from 'angular2/router';

@Component({
  selector: 'login'
})
@View({
  templateUrl: 'login/login.html',
  directives: [If]
})
export class Login {
  constructor(router: Router) {
    this.router = router;
  }

  login(event, username, password) {
    event.preventDefault();
    fetch('http://localhost:3001/sessions/create', {
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
      debugger;
      localStorage.setItem('jwt', response.id_token);
      this.router.parent.navigate('/home');
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}
