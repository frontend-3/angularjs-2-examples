System.register(['angular2/core', './student.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, student_service_1, router_1;
    var StudentListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StudentListComponent = (function () {
                function StudentListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                StudentListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getStudents().then(function (students) { return _this.students = students; });
                };
                StudentListComponent.prototype.onSelect = function (student) {
                    console.log(student);
                    this._router.navigate(['StudentDetail', { id: student.id }]);
                };
                StudentListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/student-list.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, student_service_1.StudentService])
                ], StudentListComponent);
                return StudentListComponent;
            })();
            exports_1("StudentListComponent", StudentListComponent);
        }
    }
});
//# sourceMappingURL=student-list.component.js.map