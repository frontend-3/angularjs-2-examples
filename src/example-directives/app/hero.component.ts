import {Component} from 'angular2/core'
import {PowerService} from './power.service'
import {Power} from './power'

@Component({
  selector: 'hero',
  providers:[PowerService],
  template: `
    <h1>{{name}}</h1>
    <p>Powers:</p>
    <ul>
      <li *ngFor="#power of powers">
        {{ power.name }}
        </li>
    </ul>
  `
})

export class HeroComponent {
  powers: Power[]
  id:number
  name:string

  constructor(powerService: PowerService) {
    this.powers = powerService.getPowers();
    this.id = 1;
    this.name = 'Hero1';
  }

}
