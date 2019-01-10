# Jasmine
Jasmine是一个针对JavaScript的行为驱动开发测试框架。它不依赖于浏览器，DOM或任何JavaScript框架。因此，它适用于网站，Node.js项目或JavaScript可以运行的任何地方。

## 语法相关

### Suites 套件
测试描述通过 `describe`整个全局函数来包裹, 它用于描述和执行当前的测试用例

#### `describe` 参数
1. 套件描述
2. 回调函数, 函数内写相关的测试用例


#### 样例
```
describe('你的套件描述', function(){  
})
```

### spec 规范
spec是通过调用全局Jasmine函数it来定义的，它像describe一样接受一个字符串和一个函数。字符串是规范的标题，函数是规范或测试。规范包含一个或多个测试代码状态的期望。Jasmine中的期望是一种要么为真要么为假的断言。带有所有真实期望的规范是通过的规范，带有一个或多个错误期望的规范是失败的规范。

由于describe和it是函数，它们可以包含实现测试所需的任何可执行代码。JavaScript作用域规则适用，因此在描述中声明的变量对套件中的任何it块都可用。

#### `it`参数
1. 测试用例描述
2. 回调函数， 函数内写相关的测试断言
   
#### 样例
```
describe("你的套件描述", function() {
  it("你的测试用例", function() {
  });
});
```

### Expect 预期
`expect`函数负责运行你的表达式、变量、 函数， 将运行结果与你所期望的值比较， 如果不一致则会抛出错误
`toBe` 负责接受你所期望的运行结果

#### `expect`参数
1. 表达式、变量、 函数

#### `toBe`参数
1. 你的期望值

#### 样例
```
describe("你的套件描述", function() {
  it("你的测试用例1", function() {
    expect(()=> 1+1).toBe(2);
  });

  it("你的测试用例2", function() {
    expect(false).not.toBe(true);
  });
});
```

### 生命周期
* `beforeEach` 每个测试实例执`it`行前都会被调用一次
* `afterEach`  每次测试实例执`it`行结束后都会被调用一次
* `beforeAll`  在所有的测试实例`it` 执行之前被调用一次
* `afterAll`   在所有的测试实例`it` 执行完成后被调用一次


**我在一个 `describe` 中调用了 3次`it` 方法, 得到如下的执行顺序**

```
LOG: '--------------beforeAll-------------------'
LOG: '-------------beforEach-------------------'
LOG: '-------------afterEach-------------------'
LOG: '-------------beforEach-------------------'
LOG: '-------------afterEach-------------------'
LOG: '-------------beforEach-------------------'
LOG: '-------------afterEach-------------------'
LOG: '--------------afterAll--------------------'
```


### Matchers 匹配器
* toBe（）: 用来比较数字或者字符串是否相等，不支持对象的比较。
* toEqual() :可以用来比较简单的文本和变量，还有对象是否相等。
* toMatch（）: 针对正则表达式。
* toBeDefined（）：对未定义进行判断，如果定义了则为true。
* toBeUndefined（）：对未定义进行判断，如果没有定义则为true。
* toBeNull（）：对空进行比较
* toBeTruthy（）：判断布尔值，是布尔值则为true
* toBeFalsy（）：判断布尔值，不是布尔值则为true
* toContain（）：判断字符串或者数组中是否包含某个值，包含则为true。
* toBeLessThan（）：比较数值大小，若小于则为true。
* toBeGreaterThan（）：比较数值大小，若大于则为true。
* toBeCloseTo（）：精密的数学比较
* toThrow（）：抛出异常时为true



