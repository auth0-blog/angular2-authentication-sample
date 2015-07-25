/// <reference path="typings/custom.d.ts" />

import { bootstrap, bind, formInjectables, httpInjectables } from 'angular2/angular2';
import { routerInjectables } from 'angular2/router';

import { App } from './app/app';

bootstrap(
  App,
  [
    formInjectables,
    routerInjectables,
    httpInjectables
  ]
);
