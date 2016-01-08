System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Student, StudentService, STUDENTS, studentPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Student = (function () {
                function Student(id, name, ep1, ep2) {
                    this.id = id;
                    this.name = name;
                    this.ep1 = ep1;
                    this.ep2 = ep2;
                }
                Object.defineProperty(Student.prototype, "pf", {
                    get: function () {
                        return (parseInt(this.ep1) + parseInt(this.ep2)) / 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Student;
            })();
            exports_1("Student", Student);
            StudentService = (function () {
                function StudentService() {
                }
                StudentService.prototype.getStudents = function () {
                    return studentPromise;
                };
                StudentService.prototype.getStudent = function (id) {
                    return studentPromise
                        .then(function (students) { return students.filter(function (h) { return h.id === +id; })[0]; });
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StudentService);
                return StudentService;
            })();
            exports_1("StudentService", StudentService);
            STUDENTS = [
                new Student(11, 'Alex, Arias', 12, 13),
                new Student(12, 'Barreto, Byron', 14, 15),
                new Student(13, 'Cesar Caceres', 16, 16)
            ];
            studentPromise = Promise.resolve(STUDENTS);
        }
    }
});
//# sourceMappingURL=student.service.js.map