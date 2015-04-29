import {Component, Template} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'home',
})
@Template({
  url: 'home/home.html',
  directives: []
})
export default class Home {
  constructor() {
    this.name = 'Gonto';
  }
}
