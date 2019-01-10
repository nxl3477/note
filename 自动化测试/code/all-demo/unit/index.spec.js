// 项目描述
describe('测试基本函数的API',function(){
  beforeEach(function() {
    console.log('-------------beforEach-------------------')
  })

  afterEach(function() {
    console.log('-------------afterEach-------------------')
  })

  beforeAll(function() {
    console.log('--------------beforeAll-------------------')
  })
  afterAll(function() {
    console.log('--------------afterAll--------------------')
  })

  // it 就是测试用例
  it('+1函数的测试用例', function () {
      // toBe就是期望获得的值
      expect(window.add(1)).toBe(2)
  })
  it('+1函数的测试用例', function () {
    // toBe就是期望获得的值
      expect(window.less(1)).toBe(2)
  })
  it('+1函数的测试用例', function () {
    // toBe就是期望获得的值
    expect(window.fuck(1)).toBe(2)
  })
})
