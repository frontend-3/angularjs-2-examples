import {Component, OnInit} from 'angular2/core';
import {Student, StudentService} from './student.service';
import {RouteParams, Router} from 'angular2/router';

@Component ({
  templateUrl: 'app/views/student-detail.html'
})

export class StudentDetailComponent implements OnInit {
  student: Student;
  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:StudentService
  ){}
  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getStudent(id).then(student => this.student = student)
  }
  gotoStudents() {
    this._router.navigate(['StudentList']);
  }

}
