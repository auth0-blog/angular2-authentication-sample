import {Component, View} from 'angular2/angular2';
import {status, json} from '../utils/fetch';
import { Router, RouterLink } from 'angular2/router';

@Component({
  selector: 'signup'
})
@View({
  templateUrl: 'signup/signup.html',
  directives: [RouterLink]
})
export class Signup {
  constructor(router: Router) {
    this.router = router;
  }

  signup(event, username, password) {
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

  login(event) {
    event.preventDefault();
    this.router.parent.navigate('/login');
  }

}
