import {bootstrap} from 'angular2/platform/browser';
import {Component, EventEmitter, Input, Output, Directive} from 'angular2/core';
import {ObservableWrapper} from 'angular2/src/facade/async';

@Directive({
  selector: 'interval-dir',
})

class IntervalDir {
  @Output() everySecond = new EventEmitter();
  @Output('everyFiveSeconds') five5Secs = new EventEmitter();
  constructor() {
    setInterval(() => ObservableWrapper.callEmit(this.everySecond, null), 1000);
    setInterval(() => ObservableWrapper.callEmit(this.five5Secs, null), 5000);
  }
}

@Component({
  selector: 'app',
  template: `
    <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
    </interval-dir>
  `,
  directives: [IntervalDir]
})

class App {
  everySecond() { console.log('second'); }
  everyFiveSeconds() { console.log('five seconds'); }
}

bootstrap(App);
