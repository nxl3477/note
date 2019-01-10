# 测试核心概念
* 单元测试
* 性能测试
* 安全测试
* 功能测试


## 单元测试
> 对需要产出的东西进行单元测试, 保证所有输出符合预期         
> 面向切面编程, 无侵入

* 目的: 单元测试能够让开发者明确知道代码结果
* 原则: 单一职责、接口抽象、层次分离
* 断言库: 保证最小单元是否正常运行检测方法
* 测试风格: 测试驱动开发、 行为驱动开发均是敏捷开发方法论. TDD关注所有的功能是否被实现(每一个功能都必须有对应的测试用例), suite配合test利用assert('tobi' === user.name); BDD关注整体行为是否符合整体预期, 编写的每一行代码都有目的提供一个全面的测试用例集.

![image](0A1F17E4E86141EDAEFE758EC96B4E98)

### 单元测试框架
* better-assert ( TDD断言库Github 190star 19 fork )
* should.js ( BDD断言库Github 2295star 194 fork )
* expect.js ( BDD断言库Github 139 star 162 fork )
* chai.js ( TDD BDD双模Github 2823star 271 fork )
* Jasimine.js ( BDD Github10723star 1680fork )
* Node.js本身集成 require('assert')


### 自动化单元测试
* karma 自动化runner集成PhantomJS无刷新
* npm install -g karma
* npm install karma-cli --save-dev
* npm install karma-chrome-launcher --save-dev
* npm install karma-phantomjs-launcher --save-dev
* npm install karma-mocha --save-dev
* npm install karma-chain


## 报告和单侧覆盖率检查

* npm install karma-coverage --save-dev
* 生成页面查看代码覆盖测试率结果
```
// 配置代码覆盖测试率生成结果
coverageReporter: {
    type: 'html',
    dir: 'coverage/' 
}
```
![image](964B945AC70449718DF36343203B99DB)




![image](D9436C59932F4577AE706D403BD513E5)


![image](E7BBB50FE73643D8A9667849DC059E2D)





