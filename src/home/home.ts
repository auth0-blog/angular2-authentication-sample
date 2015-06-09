import {Component, View, If} from 'angular2/angular2';
import {status, text} from '../utils/fetch'
import { Router} from 'angular2/router';

@Component({
  selector: 'home'
})
@View({
  templateUrl: 'home/home.html',
  directives: [If]
})
export class Home {
  jwt: string;
  decodedJwt: string;

  constructor(router: Router) {
    this.router = router;
    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && jwt_decode(this.jwt);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.parent.navigate('/login');
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
    fetch(url, {
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
