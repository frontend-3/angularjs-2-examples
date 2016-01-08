import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentListComponent}     from './students/student-list.component';
import {StudentDetailComponent}   from './students/student-detail.component';
import {StudentService}           from './students/student.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>Listado de alumnos</h1>
    <nav>
      <a [routerLink]="['StudentList']">List of Students</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:  [StudentService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/students', name: 'StudentList', component: StudentListComponent},
  {path:'/student/:id', name: 'StudentDetail', component: StudentDetailComponent}
])
export class AppComponent { }
