import {Component, View, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {status, text} from '../utils/fetch'

@Component({
  selector: 'home',
})
@View({
  templateUrl: 'home/home.html',
  directives: [If]
})
export class Home {
  name: string;
  constructor() {
    this.name = 'Gonto';
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
