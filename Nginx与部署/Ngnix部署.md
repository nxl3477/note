## 部署工具
* mac： Homebrew


## 命令
| 命令 | 功能 |
| ------ | ------ |
| nginx -s stop | 终止服务 | 
|  niginx -s reload | 重启nginx |
|  niginx -t | 查看配置是否有效 |
|  niginx -v | 查看版本 |

## 如何配置Nginx 
打开`nginx.conf`文件
> 前面带 # 的配置就是注释掉的



部署文件示例
> 这是没有添加 ip_hash的配置， 如果要添加ip_hash的话， 只要在`server 192.168.0.21` 这行上面添加`ip_hash;`就可以了 

![](md_imgs/conf.png)
