import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AUTH_TOKEN } from '../../common/token';

@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css']
})
export class HomeComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;

  constructor(public router: Router, public http: HttpClient) {
    this.jwt = localStorage.getItem(AUTH_TOKEN);
    this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
  }

  logout() {
    localStorage.removeItem(AUTH_TOKEN);
    this.router.navigate(['login']);
  }

  callAnonymousApi() {
    this._callApi('http://localhost:3001/api/random-quote');
  }

  callSecuredApi() {
    this._callApi('http://localhost:3001/api/protected/random-quote');
  }

  _callApi(url) {
    this.response = null;

    this.http.get(url, { responseType: 'text' })
      .subscribe(
        response => this.response = <any>response,
        error => this.response = error.message
      );
  }
}
