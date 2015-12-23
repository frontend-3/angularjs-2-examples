import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Output} from 'angular2/core';
import {Directive} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'zippy',
  template: `
  <div class="zippy">
    <div (click)="toggle()" (open)="open()">Toggle</div>
    <div [hidden]="!visible">
      <p>Visible</p>
      <ng-content></ng-content>
    </div>
 </div>`})
export class Zippy {
  visible: boolean = true;
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit();
    } else {
      this.close.emit();
    }
  }
  open() {
    console.log('Fire open event')
  }
}

bootstrap(Zippy);
