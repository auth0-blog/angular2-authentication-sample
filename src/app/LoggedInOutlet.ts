import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/angular2';
import {Router, RouterOutlet} from 'angular2/router';
import {Injector} from 'angular2/di';
import {Login} from '../login/login';

@Directive({selector: 'router-outlet'})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any
  constructor(
    elementRef: ElementRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    _injector: Injector,
    @Attribute('name') nameAttr: string) {

      this.publicRoutes = {
        '/login': true,
        '/signup': true
      };

      super(elementRef, _loader, _parentRouter, _injector, nameAttr);
  }

  activate(instruction) {
    var url = this._parentRouter.lastNavigationAttempt;
    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
      instruction.component = Login;
    }
    super.activate(instruction);
  }
}
