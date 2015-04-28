import {Component, View, bootstrap, If} from 'angular2/angular2';

@Component({
    selector: 'hello'  //TODO: default to camel-cased class name if not provided?
})
@View({
    template: `<span *if="name">Hello, {{name}}!</span>`,
    directives: [If]
})
export class Hello {
    name: string = 'World';
    constructor() {
        setTimeout(() => {
          this.name = 'NEW World'
        }, 2000);
    }
}

bootstrap(Hello);
