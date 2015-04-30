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
    this.user = {};
    this.router = router;
  }

  login() {
    fetch('http://localhost:3001/sessions/create', {
      method: 'POST',
      body: JSON.stringify(this.user)
    })
    .then(status)
    .then(json)
    .then((response) => {
      localStorage.setItem('jwt', response.id_token);
      this.router.navigate('/home');
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}
