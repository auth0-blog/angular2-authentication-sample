import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { contentHeaders } from '../../common/headers';
import { HttpClient } from '@angular/common/http';
import { AUTH_TOKEN } from '../../common/token';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.css']
})
export class LoginComponent {
  constructor(public router: Router, public http: HttpClient) {}

  login(event, username, password) {
    event.preventDefault();
    let body = { username, password };
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
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

  signup(event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
