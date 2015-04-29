import {View, Component, Template, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
// import Home from '../home/home';

@Component({
  selector: 'auth-app',
})
@View({
  url: 'app.html',
  directives: [If]
})
export class App {
  constructor() {
  }
}
