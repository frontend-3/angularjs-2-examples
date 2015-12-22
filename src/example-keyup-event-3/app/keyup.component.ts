import {Component} from 'angular2/core';

@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="text=box.value">
    <p>{{text}}</p>
  `
})

export class KeyUpComponent_v3 {
  text='';
}
