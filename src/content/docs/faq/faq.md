---
title: AgentCraft常见问题
description: AgentCraft的常见问题介绍
---
部署及使用AgentCraft可能会遇到的问题

## 常见问题
### AgentCraft部署失败
在函数计算上部署失败的时候，可以查看部署的日志信息。 主要的原因可能是您的云账号资源限制， 比如vpc的配额超出， 遇到此问题请前往阿里云的配额中心进行扩增
![vpc配额](https://img.alicdn.com/imgextra/i4/O1CN01hLnTcD25IQbtO3M7Z_!!6000000007503-0-tps-3562-1680.jpg)
### AgentCraft可以访问，但是登录注册失败
可能是因为您的数据库配置问题，请注意选择postgresql, 另外如果您使用的是数据内网的连接配置，请关注数据库跟AgentCraft函数的网络是否一致，此时可以考虑打开公网配置进行连接测试
## AgentCraft知识库不可用
注意查看您的embedding服务是否可用，在系统配置引导部分有相关的介绍，您也可以独立部署一个embedding服务