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

## 性能测试
> 对Node.js 极其重要


### 基准测试
* 面向切面编程AOP无侵入式统计
* Benchmark基准测试方法, 它并不是简单地统计执行多少次测试代码后对比时间, 它对测试有着严密的抽样过程. 执行多少次取决于采样到的数据能否完成统计. 根据统计次数计算方差
![image](D9436C59932F4577AE706D403BD513E5)

### 压力测试
* 对网络接口做压力测试需要检查的几个常用指标有吞吐率、相应时间和并发数, 这些指标反映了服务器并发处理能力
* PV 网站当日访问人数UV独立访问人数. PV每天几十万甚至上百万就需要考虑压力测试. 换算公式QPS=pv/t , ps: 1000000/10*60*60 = 27.7(100万请求集中在10小时, 服务器每秒处理27.7个业务请求)
* 常用的压力测试工具是 ab、siege、http_load
![image](E7BBB50FE73643D8A9667849DC059E2D)

## 安全测试
* XSS
* SQL
* CSRF

## 功能测试
> 用户真实性检查

* selenium-webdriver 
* protractor selenuim-standalone 
* http://webdriver.io/ WEBDRIVERI/O
* 冒烟测试SmokeTest 自由测试的一种, 找到一个BUG开发修复, 然后专门针对此BUG, 优点节省时间防止Build失败, 缺点是覆盖率极低.
* 回归测试 修改一处对整体全部测试, 一般配合自动化测试


## JSLint & Hint
* 目的: 监测js代码标准
* 原因: js代码诡异, 保证团队代码规范
* lint: http://wwww.jslint.com
* hint: http://www.jshint.com
* 搭配自动化任务管理工具完善自动化测试 grunt-jshint、grunt-jslint



## 专业词汇
* push 推动一下
* flow 跟进一下
* sense 感觉
* tb  TeamBuilding 团队建设
* QPS 对一个特定的查询服务器在规定时间内所处理流量多少的衡量标准