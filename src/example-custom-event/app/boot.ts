import {bootstrap} from 'angular2/platform/browser';
import {Component, EventEmitter, Input, Output, Directive} from 'angular2/core';
import {ObservableWrapper} from 'angular2/src/facade/async';

@Component({
  selector: 'app',
  template: `
    <div (click)="eventClick()" (log)="showLog()">
    click me
    </div>
  `,
})

export class App {
   @Output() log = new EventEmitter();
   eventClick(){
     console.log('click');
     ObservableWrapper.callEmit(this.log, null) ;
   }

  showLog () {
    console.log('hola')
  }
}

bootstrap(App)
