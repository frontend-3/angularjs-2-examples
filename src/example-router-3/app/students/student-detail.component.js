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
    var StudentDetailComponent;
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
            StudentDetailComponent = (function () {
                function StudentDetailComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                StudentDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getStudent(id).then(function (student) { return _this.student = student; });
                };
                StudentDetailComponent.prototype.gotoStudents = function () {
                    this._router.navigate(['StudentList']);
                };
                StudentDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/student-detail.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, student_service_1.StudentService])
                ], StudentDetailComponent);
                return StudentDetailComponent;
            })();
            exports_1("StudentDetailComponent", StudentDetailComponent);
        }
    }
});
//# sourceMappingURL=student-detail.component.js.map