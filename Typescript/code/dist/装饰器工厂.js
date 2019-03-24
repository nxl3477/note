"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function dec(value) {
    return function (target) {
        console.log(arguments);
        console.log(target);
    };
}
let Cat = class Cat {
};
Cat = __decorate([
    dec('test')
], Cat);
function f(value) {
    return function (target, propertyKey, descriptor) {
        console.log(arguments);
        console.log(target);
    };
}
class Tiger {
    run() {
    }
}
__decorate([
    f('tiger run'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tiger.prototype, "run", null);
//# sourceMappingURL=装饰器工厂.js.map