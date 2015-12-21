import {Component} from 'angular2/core';

@Component({
  selector: 'loop-back',
  template:`
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})

export class LoopBackComponent {

}
