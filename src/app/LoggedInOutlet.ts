import {Directive, Attribute} from 'angular2/annotations';
import {ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet} from 'angular2/router';
import {Injector} from 'angular2/di';
import {Login} from '../login/login';

import * as routerMod from 'angular2/router';

@Directive({selector: 'router-outlet'})
export class LoggedInRouterOutlet extends routerMod.RouterOutlet {
  publicRoutes: any
  constructor(
    elementRef: ElementRef,
    _loader: DynamicComponentLoader,
    _parentRouter: routerMod.Router,
    _injector: Injector,
    @Attribute('name') nameAttr: string) {      
      
      this.publicRoutes = {
        '/login': true,
        '/signup': true
      };
      
      super(elementRef, _loader, _parentRouter, _injector, nameAttr);
      
  }

  // activate(instruction) {
  //   var url = this._parentRouter.lastNavigationAttempt;
  //   if (!this.publicRoutes[url] && !localStorage.getItem('jwt')) {
  //     instruction.component = Login;
  //   }
  //   super.activate(instruction);
  // }
}
