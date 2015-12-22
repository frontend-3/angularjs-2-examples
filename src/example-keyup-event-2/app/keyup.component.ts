import {Component} from 'angular2/core';

@Component({
  selector: 'key-up2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v2 {
  values='';
  onKey(value:string) {
    this.values += value + ' | ';
  }
}
