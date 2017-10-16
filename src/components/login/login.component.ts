import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_TOKEN } from '../../common/token';
import { BackendService } from '../../services/backend';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.style.css']
})
export class LoginComponent {
  constructor(public router: Router, public backend: BackendService) {}

  login(event, username, password) {
    event.preventDefault();

    const body = { username, password };
    this.backend.login(body)
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
