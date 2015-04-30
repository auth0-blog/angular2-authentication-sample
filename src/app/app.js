import {View, Component, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {Home} from '../home/home';
import { Router, RouterOutlet, RouteConfig } from 'angular2/router';

@Component({
  selector: 'auth-app',
})
@View({
  templateUrl: 'app/app.html',
  directives: [If, RouterOutlet]
})
@RouteConfig([
  {path: '/', component: Home }
])
export class App {
  constructor() {
  }
}
