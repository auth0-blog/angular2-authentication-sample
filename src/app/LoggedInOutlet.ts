/// <reference path="../typings/custom.d.ts" />
import {Directive, Attribute, ElementRef, DynamicComponentLoader, Injector} from 'angular2/angular2';
import {Router, RouterOutlet} from 'angular2/router';
import {Login} from '../login/login';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any
  constructor(public _elementRef: ElementRef, public _loader: DynamicComponentLoader,
              public _parentRouter: Router, @Attribute('name') nameAttr: string) {
      super(_elementRef, _loader, _parentRouter, nameAttr);

      this.publicRoutes = {
        '/login': true,
        '/signup': true
      };

  }

  commit(instruction) {
    var url = this._parentRouter.lastNavigationAttempt;
    if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
      instruction.component = Login;
    }
    return super.commit(instruction);
  }
}
