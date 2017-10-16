import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-app',
  templateUrl: './app.template.html'
})

export class AppComponent {
  constructor(public router: Router) {}
}
