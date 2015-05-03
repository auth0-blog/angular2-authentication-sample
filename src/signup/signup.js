import {Component, View, If} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';

@Component({
  selector: 'signup'
})
@View({
  templateUrl: 'signup/signup.html',
  directives: [If, RouterLink]
})
export class Signup {
  constructor(router: Router) {
    this.router = router;
  }

  login(event, username, password) {
    event.preventDefault();
    fetch('http://localhost:3001/users', {
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
      this.router.parent.navigate('/home');
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });
  }
}
