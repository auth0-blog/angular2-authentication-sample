import {Directive} from 'angular2/angular2';
import {RouterOutlet} from 'angular2/router';
import {Login} from '../login/login';

@Directive({selector: 'loggedin-router-outlet'})
export class LoggedInOutlet extends RouterOutlet {
  constructor(viewContainer, compiler, router, injector) {
    super(viewContainer, compiler, router, injector);
    this.publicRoutes = {
      '/login': true,
      '/signup': true
    }
  }

  canActivate(instruction) {
    var url = this._router.lastNavigationAttempt;
    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
      instruction.component = Login;
    }
    return Promise.resolve(true);
  }
}
