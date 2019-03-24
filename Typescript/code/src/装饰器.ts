function sealed(target:any) {
  // do something with 'target' ...
  console.log('----------')
  console.log(target)
  console.log('----------')
  return target
}


// 被装饰的对象 foo
@sealed
class Dog {

}



// ----- 方法装饰器 -----------


