import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

const template = require('./app.html');

@Component({
  selector: 'auth-app',
  template: template,
  directives: [ ROUTER_DIRECTIVES ]
})

export class App {
  constructor(public router: Router) {}
}
