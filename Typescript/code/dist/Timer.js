"use strict";
var Person;
(function (Person) {
    class Student {
        constructor(name) {
            this.name = name;
        }
        study() {
            console.log(this.name + '在学习');
        }
        speak() {
            console.log(this.name + '在说话');
        }
    }
    Person.Student = Student;
})(Person || (Person = {}));
//# sourceMappingURL=Timer.js.map