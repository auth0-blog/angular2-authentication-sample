import { defaultPipes } from 'angular2/change_detection';

import { JSONPipeFactory } from './json';

export var pipes = Object.assign({}, defaultPipes, {
  'json': [
    new JSONPipeFactory()
  ]
});
