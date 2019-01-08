// 项目描述
describe('测试基本函数的API',function(){
    // it 就是测试用例
    it('+1函数的测试用例', function () {
        // toBe就是期望获得的值
        expect(window.add(1)).toBe(1)
        expect(window.add(3)).toBe(4)
    })
})
