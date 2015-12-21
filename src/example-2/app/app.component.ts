import {Component} from 'angular2/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <ul>
      <li *ngFor="#hero of heroes">{{hero}}</li>
    </ul>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];
  myHero = 'Windstorm';
}
