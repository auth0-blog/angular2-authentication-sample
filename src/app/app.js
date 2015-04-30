import {View, Component, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {Home} from '../home/home';
import {Login} from '../login/login';
import { Router, RouterOutlet, RouterLink, RouteParams, RouteConfig } from 'angular2/router';

@Component({
  selector: 'auth-app',
})
@View({
  templateUrl: 'app/app.html',
  directives: [If, RouterOutlet]
})
export class App {
  constructor(router: Router) {
    router
      .config('/home', Home)
      .then((_) => router.config('/login', Login))
      .then((_) => router.navigate('/login'))
  }
}
