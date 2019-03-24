// Animal 抽象类
abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any;
}

// 实现Animal抽象类
class Dog extends Animal {

  constructor(name: any) {
    super(name)
  }
  eat() {
    console.log(this.name + '吃粮食')
  }
  // 可扩展 run方法
  run() {
  }
}

var d = new Dog('小狗')
d.eat()