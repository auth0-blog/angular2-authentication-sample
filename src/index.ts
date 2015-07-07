/// <reference path="../typings/tsd.d.ts" />

import { bootstrap } from 'angular2/angular2';
import { bind } from 'angular2/di';
import { routerInjectables } from 'angular2/router';
import { formInjectables } from 'angular2/forms';
import { httpInjectables } from 'angular2/http';

import { App } from './app/app';

bootstrap(
  App,
  [
    formInjectables,
    routerInjectables,
    httpInjectables
  ]
);
