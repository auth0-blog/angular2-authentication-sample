import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers';
import { HttpClient } from '@angular/common/http';
import { AUTH_TOKEN } from '../common/token';

@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  constructor(public router: Router, public http: HttpClient) {
  }

  signup(event, username, password) {
    event.preventDefault();
    let body = { username, password };
    this.http.post('http://localhost:3001/users', body, { headers: contentHeaders })
      .subscribe(
        (response: any) => {
          localStorage.setItem(AUTH_TOKEN, response.id_token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.message);
          console.log(error.message);
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}
