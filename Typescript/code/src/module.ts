// interface StringValidator {
//   // 接口定义的方法
//   isAcceptable(s:string):boolean;
// }

// var lettersRegexp = /^[A-Za-z]+$]/;
// var numberRegexp = /^[0-9]+$/;

// // 实现接口的方法
// class LettersOnlyValidator implements StringValidator {
//   isAcceptable(s:string):boolean {
//     return lettersRegexp.test(s)
//   }
// } 
// class ZipCodeValidator implements StringValidator {
//   isAcceptable(s:string):boolean {
//     return s.length === 5 && numberRegexp.test(s)
//   }
// }



// ---------------- module ----------------------



module Validation {
  // 需要使用 export 来表示对外暴露
  export interface StringValidator {
    isAcceptable(s:string): boolean;
  }

  var lettersRegexp = /^[A-Za-z]+$]/;
  var numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s:string) {
      return lettersRegexp.test(s)
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s:string):boolean {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}