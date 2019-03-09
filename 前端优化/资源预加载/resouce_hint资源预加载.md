
# 1. Resource Hint
> 推荐文章地址: https://segmentfault.com/a/1190000016926789

Resource Hint是一系列相关标准，来告诉浏览器哪些源（origin）下的资源我们的Web App想要获取，哪些资源在之后的操作或浏览时需要被使用，以便让浏览器能够进行一些预先连接或预先加载等操作。Resource Hint有DNS Prefetch、Preconnect、Prefetch和Prerender这四种。




## 1.1 DNS Prefetch
当我们在注重前端性能优化时，可能会忽略了DNS解析。然而DNS的解析也是有耗时的。在Chrome的Timing Breakdown Phase中，第三阶段就是DNS查询。DNS Prefetch就是帮助我们告知浏览器，某个源下的资源在之后会要被获取，这样浏览器就会（Should）尽早解析它。

Resource Hint主要通过使用link标签。rel属性确定类型，href属性则指定相应的源或资源URL。DNS Prefetch可以像下面这样使用：

```
<link rel="dns-prefetch" href="//yourwebsite.com">
```

## 1.2 Preconnect

我们知道，建立连接不仅需要DNS查询，还需要进行TCP协议握手，有些还会有TLS/SSL协议，这些都会导致连接的耗时。因此，使用Preconnect可以帮助你告诉浏览器：“我有一些资源会用到某个源，可以帮我预先建立连接。”

根据规范，当你使用Preconnect时，浏览器大致做了如下处理：

首先，解析Preconnect的URL
其次，根据当前link元素中的属性进行cors的设置
默认先将credential设为true；如果cors为Anonymous并且存在跨域，则将credential置为false
最后进行连接

使用Preconnect只需要将rel属性设为preconnect即可：

```
<link rel="preconnect" href="//yourwebsite.com">
```

当然，你也可以设置CORS

```
<link rel="preconnect" href="//yourwebsite.com" crossorigin>
```

## 1.3 Prefetch
你可以把Prefetch理解为资源预获取。一般来说，可以用Prefetch来指定在紧接着之后的操作或浏览中需要使用到的资源，让浏览器提前获取。由于仅仅是提前获取资源，因此浏览器不会对资源进行预处理，并且像CSS样式表、JavaScript脚本这样的资源是不会自动执行并应用于当前文档的。

需要注意的是，和DNS Prefetch、Preconnect使用不太一样的地方是，Prefetch有一个as的可选属性，用来指定获取资源的类型。由于不同的资源类型会具有不同的优先级、CSP、请求头等，因此该属性很重要。下表列出了一些常用资源的as属性值：

```
<link rel="prefetch" href="/my.little.script.js" as="script">
```


## 1.4 Prerender
上一部分我们讲了Prefetch，而Prerender则是Prefetch的更进一步。可以粗略地理解为“预处理”（预执行）。

通过Prerender“预处理”的资源，浏览器都会作为HTML进行处理。浏览器除了会去获取资源，还可能会预处理（MAY preprocess）该资源，而该HTML页面依赖的其他资源，像`<script>、<style>`等页面所需资源也可能会被处理。但是预处理会由于浏览器或当前机器、网络情况的不同而被不同程度地推迟。例如，会根据CPU、GPU和内存的使用情况，以及请求操作的幂等性而选择不同的策略或阻止该操作。

注意，由于这些预处理操作的不可控性，当你只是需要能够预先获取部分资源来加速后续可能出现的网络请求时，建议使用Prefetch。当使用Prerender时，为了保证兼容性，目标页面可以监听visibilitychange事件并使用document.visibilityState来判断页面状态。


Prerender的使用方式非常简单，与DNS Prefetch和Preconnect类似，指定rel属性为prerender：

```
<link rel="prerender" href="//yourwebsite.com/nextpage.html">
```





