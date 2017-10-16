import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_TOKEN } from '../../common/token';
import { BackendService } from '../../services/backend';

@Component({
  selector: 'signup',
  templateUrl: './signup.template.html',
  styleUrls: ['./signup.style.css']
})
export class SignupComponent {
  constructor(public router: Router, public backend: BackendService) {}

  signup(event, username, password) {
    event.preventDefault();

    const body = { username, password };
    this.backend.signup(body)
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
