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
      super(elementRef, _loader, _parentRouter, _injector, nameAttr);
  }
}
