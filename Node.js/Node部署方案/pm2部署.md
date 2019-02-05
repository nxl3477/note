# pm2
> 官网及使用手册: https://pm2.io/doc/en/runtime/features/commands-cheatsheet/

pm2是一个Node.js的项目管理工具， 它也是个负载均衡， 只不过负载均衡的是本机， 它将项目运行在本机的不同h核上， 对核进行负载均衡

* 监听整个代码的热启动
* 能够动态的监控文件的上传，  0秒热启动
* pm2能够实现 cpu核数的负载均衡
* 内存的使用过高或cpu过于频繁调度， 和内存泄漏帮助自动重启
* 可以查看每天服务器 restart 个数来鉴别代码问题

## 命令相关
| 命令 | 功能 |
| :------| ------: | :------: |
| pm2 start pm2.json | 启动 | 
| pm2 restart pm2.json | 重启 |
| pm2 stop all | 关闭  |
| pm2 list | 查看启动清理 |
| pm2 log |  查看日志 |
| pm2 monit |  监控详情 |
| pm2 link key1 key2 |  线上远程监控 |

## 如何配置
首先我们需要创建一个 `pm2.json` 的配置文件

然后这是我编写的`pm2.json`的基础配置模板
```
{
  // 名称
  "name": "node-app",
  // 脚本
  "script" : "app.js",
  "log_date_format": "YYY-MM-DD HH:mm Z",
  // 输出文件
  "out_file": "log/node-app.stdout.log",
  // 监听
  "watch": true,
  // ---------在指定情况下执行 Cluster mode 整个模式-----
  // 让整个Node 的代码占满cpu
  "instances": "max",
  // 以主线程的形式去启动
  // fork 是起一个进程， 然后复制该进程到cpu里， 主进程挂了4个fork都挂了
  // cluster 是起4个独立的进程， 互不干涉， 并且err_log_file只在cluster模式下实现
  "exec_mode": "cluster"
}
```


## 部署盖世绝学

| 命令 | 功能 |
| :------| ------: | :------: |
| ps aux \| grep node | 查看Node进程 | 
| lsof -i tcp:8081 | 查看谁占用8081端口 |
| kill -9 pid | 根据pid 杀死进程  |
| ssh 用户名@地址 | 免密登录 |
| scp sourse-map.json root@IP地址:/路径 |  不知道 |
| scp -r advance/ root@101.200.185.250:/opt/node-publish/www/static | 不知道  |



## 上线脚本
自动脚本依赖shelljs
>  npm i shelljs

根目录创建一个`deploy.js`, 当然linux好的同学可以直接写 `shell` 脚本

deploy.js内部这样写
```
const shell = require('shelljs');
shell.exec('npm install --production')
shell.exec('pm2 start pm2.json')

```


然后你上线只需要`node deploy`一次就可以了， 或者你加入`package.json`的自动命令