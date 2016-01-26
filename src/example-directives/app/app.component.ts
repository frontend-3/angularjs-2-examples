import {Component} from 'angular2/core';
import {HeroComponent} from './hero.component';

@Component({
  selector: 'my-app',
  directives:[HeroComponent],
  template: `
    <hero></hero>
  `
})

export class AppComponent {
}
