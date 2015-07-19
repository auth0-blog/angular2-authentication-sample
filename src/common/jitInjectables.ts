/// <reference path="../typings/custom.d.ts" />
import {ChangeDetection, JitChangeDetection} from 'angular2/change_detection';
import {bind} from 'angular2/di';

export var jitInjectables = [
  bind(ChangeDetection).toClass(JitChangeDetection)
];
