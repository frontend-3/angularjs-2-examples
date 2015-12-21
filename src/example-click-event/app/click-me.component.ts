import {Component} from 'angular2/core';

@Component({
  selector: 'click-me',
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})
export class ClickMeComponent {
  clickMessage = '';
  onClickMe(){
    this.clickMessage ='You are my hero!';
  }
}
