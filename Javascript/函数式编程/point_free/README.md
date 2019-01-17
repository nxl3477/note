
## Point Free
> 本笔记观看阮一峰教程后实践编写

> Pointfree 就是如何使用函数式编程的答案 --- 阮一峰

我们可以把数据处理的过程，定义成一种与参数无关的合成运算。不需要用到代表数据的那个参数，只要把一些简单的运算步骤合成在一起即可。

Pointfree 的本质就是使用一些通用的函数，组合出各种复杂运算。上层运算不要直接操作数据，而是通过底层函数去处理。这就要求，将一些常用的操作封装成函数。


### 函数的拆分与合成
程序的运行过程无非就是 输入a 返回 b， 但在a 变为b的过程中， 我们可以细分， 比如 `a -> m -> n -> b` ,这样中间多了两个中间过渡值`m`和 `n`, 

就像一根水管， 传入的a 流向了 b端

![](../md_imgs/hose.png)

拆分成三根水管， a 要经过水管 f1 得到 m 然后传入函数f2 得到 n ,最后通过水管f3得到 b

![](../md_imgs/3hose.png)

细分了过程， 但结果相同，并且使得过程可替换了， 这个水管不好用了可以立马换其他的， 而不是整根替换， 过程可控了

让我们来看一个简单的例子， 

在一段字符串中找出最长的字符长度
首先， 我们定义一个pipe 函数， 把它接收的参数想象成一段一段的水管, 他负责按顺序拼接你传的"水管"， 将上一个`水管`返回的值, 

顺便说一下这个pipe用了尾递归

```
// 将上一次的计算结果传给下一个函数
function pipe(...args) {
  const argsCopy = [...args]
  return function (str) {
    return (function loop(val) {
      if( argsCopy.length == 0 ) {
        return val
      }
      const result = argsCopy.shift()(val)
      return loop(result)
    })(str);
  }
}
```

秉承着函数的单一职责， 我们编写了许多个“水管”， 分别处理不同的步骤

```
// 找出这段字符串最长的单词
var words = "aa bb cc ccccc"

// map 
const arrMap = (arr, callback) => Array.prototype.map.call(arr, callback)

// 根据空格分割成数组
const splitBySpace = str => str.split(' ')

// 获取字符长度
const getLen = str => str.length

// 字符串转长度
const str2length = arr => arrMap(arr, getLen)

// 逆序排序
const sortByDesc = arr => [].sort.call(arr, (a, b) => b - a)

// 获取数组第一个
const getArrFirst = (arr) => arr[0]
```

然后我们按部就班的排好顺序，传入pipe 

整理下思路
字符串转为数组 -> 将数组中的单词转为长度 -> 根据字符长度逆序排序 -> 然后获取第一个也就是最大的值

```
console.log( 
  pipe(
    // 根据空格分割
    splitBySpace, 
    // 将数组中的单词转为长度
    str2length, 
    // 根据字符长度逆序排序
    sortByDesc,
    // 获取第一个也就是最大的值
    getArrFirst

    // 传入字符
  )(words)
)

```
