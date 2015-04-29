import {View, Component, If} from 'angular2/angular2';
import {bind} from 'angular2/di';
import {Home} from '../home/home';

@Component({
  selector: 'auth-app',
})
@View({
  templateUrl: 'app.html',
  directives: [If, Home]
})
export class App {
  constructor() {
  }
}
