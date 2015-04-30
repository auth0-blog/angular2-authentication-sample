import {View, Component, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import { Router, RouterOutlet, RouterLink, RouteParams, RouteConfig } from 'angular2/router';
import {LoggedInOutlet} from './LoggedInOutlet';

@Component({
  selector: 'auth-app',
})
@View({
  templateUrl: 'app/app.html',
  directives: [If, LoggedInOutlet]
})
export class App {
  constructor(router: Router) {
    router
      .config('/home', Home)
      .then((_) => router.config('/login', Login, 'login'))
      .then((_) => router.config('/signup', Signup, 'signup'))
      .then((_) => router.navigate('/home', 'home'))
  }
}
