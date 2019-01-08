# PHP
> 超文本预处理器

## 基本语法
#### 访问外部变量
```
<?php

$a = "外部"
function test() {
    global $a;
    echo $a;
}

?>
```

#### 使变量全部文件都能访问
```
$GLOBALS['a'] = 'test'
```

#### 引入外部的php文件
```
// 报错后就不执行
require_once("a.php")
// 报错后依旧往下执行
include_once('a.php')
```

#### session
```
$_SESSION["views"] = 1
```

#### 接收请求
```
// 不分类型，请求都接收
$_REQUEST['username']


// get
$username = $_GET['username']
```

#### 设置header 
```
header("Content-type;text/html; charset=utf-8");
```