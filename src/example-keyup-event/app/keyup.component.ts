import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v1 {
  values='';
  // without strong typing
  onKey(event:any) {
   this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
