import {Component, OnInit} from 'angular2/core';
import {Student, StudentService} from './student.service';
import {Router} from 'angular2/router';

@Component({
  templateUrl: 'app/views/student-list.html';
})

export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(
    private _router: Router,
    private _service: StudentService
  ){}

  ngOnInit(){
    this._service.getStudents().then(students => this.students = students)
  }

  onSelect(student: Student) {
    console.log(student);
    this._router.navigate(['StudentDetail', {id:student.id}] );
  }
}
