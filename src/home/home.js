import {Component, View} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'home',
})
@View({
  templateUrl: 'home.html'
})
export class Home {
  name: srtring = 'World';

  constructor() {
    this.name = 'Gonto';
  }
}
