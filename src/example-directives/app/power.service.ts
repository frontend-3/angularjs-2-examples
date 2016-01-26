import {Injectable} from 'angular2/core';
import {Power} from './power';

@Injectable()
export class PowerService {
  getPowers() {
    return POWERS;
  }
}

var POWERS = [
    new Power(1,'Poder 1'),
    new Power(2,'Poder 2')
];
