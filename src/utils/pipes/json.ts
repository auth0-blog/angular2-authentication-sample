import { Pipe } from 'angular2/change_detection';

export class JSONPipeFactory extends Pipe {
  supports(obj):boolean {
    return true;
  }

  transform(value):string {
    return JSON.stringify(value, null, 2);
  }

  create():Pipe {
    return this;
  }
}
