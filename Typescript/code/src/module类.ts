module Person {
  export class Student {
    name: string;
    constructor(name:string) {
      this.name = name;
    }
    study() {
      console.log(this.name + '在学习')
    }
    speak() {
      console.log(this.name + '在说话')
    }
  }
}