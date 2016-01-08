import {Injectable} from 'angular2/core';
export class Student {
  private _pf: number;
  public get pf(): number {

    return (parseInt(this.ep1) + parseInt(this.ep2)) / 2;
  }
  constructor(
      public id: number,
      public name: string
      public ep1: number
      public ep2: number
  ) {}
}

@Injectable()
export class StudentService {
  getStudents() {
    return studentPromise;
  }
  getStudent(id:number|string) {
    return studentPromise
      .then(students => students.filter(h => h.id === +id)[0]);
  }
}

var STUDENTS = [
  new Student(11, 'Alex, Arias', 12, 13),
  new Student(12, 'Barreto, Byron', 14, 15)
  new Student(13, 'Cesar Caceres', 16, 16)
]

var studentPromise = Promise.resolve(STUDENTS)
