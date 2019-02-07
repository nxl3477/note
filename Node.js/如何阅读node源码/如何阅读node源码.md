# 如何阅读node源码


1. git clone https://github.com/nodejs/node.git
2. cd node
3. ./configure && make
4. make install
5. make test


首先克隆下node的项目，  进入目录， 运行一次测试


## 源文件分三类
* 纯Javascript 写的核心模块
* 带NativeBinding的JavaScript核心模块
* C++ 文件