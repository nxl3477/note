function dec(value:string) {
  return function (target:any)  {
    console.log(arguments)
    console.log(target)    
  }
}

@dec('test')
class Cat {
  
  
}


// ----- 方法装饰器 -----------


function f(value:string) {
  return function (target:any, propertyKey: string, descriptor: PropertyDescriptor)  {
    console.log(arguments)
    console.log(target)    
  }
}

class Tiger {
  
  @f('tiger run')
  run() {

  }
}