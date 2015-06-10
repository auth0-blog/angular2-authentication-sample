import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/angular2';
import {Router, RouterOutlet} from 'angular2/router';
import {Injector} from 'angular2/di';
import {Login} from '../login/login';

@Directive({selector: 'loggedin-router-outlet'})
export class LoggedInOutlet extends RouterOutlet {
  publicRoutes: any
  constructor(
    elementRef: ElementRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    _injector: Injector,
    @Attribute('name') nameAttr: string) {
    debugger;
    super(elementRef, _loader, _parentRouter, _injector, nameAttr);
    this.publicRoutes = {
      '/login': true,
      '/signup': true
    }
  }

  activate(instruction) {
    debugger;
    var url = this._parentRouter.lastNavigationAttempt;
    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
      instruction.component = Login;
    }
    super(instruction);
  }
}
