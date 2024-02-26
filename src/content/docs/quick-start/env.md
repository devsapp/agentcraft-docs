---
title: AgentCraft的环境变量
description: 关于AgentCraft的环境变量介绍
---

AgentCraft 引入环境变量的配置更好的进行工程的调试和部署，下面展开介绍这些环境变量的说明及用途

## 环境变量

### 前端工程 agentcraft-fe

+ baseUrl:  后端服务的访问路径  ，示例：http://127.0.0.1:8000 （agentcraft-be本地启动后的访问地址）
+ openApiUrl: 后端服务的api访问地址 ， 该变量本地开发可以忽略
+ FC_ACCOUNT_ID: 阿里云的 account_id
+ ALIBABA_CLOUD_ACCESS_KEY_ID: 阿里云的 key
+ ALIBABA_CLOUD_ACCESS_KEY_SECRET: 阿里云的 secret
+ Region: 访问地域， 示例： cn-hangzhou
+ beServiceName: FC2.0的服务名称，已弃用
+ beFunctionName: 后端服务的函数名，在创建AgentCraft的时候填写，并且可以通过在线的服务查看 示例： agentcraft-backend

### 后端工程 agentcraft-be

+ CREATE_TABLES: 是否创建表, 默认是空， 系统初始化完成之后会修改为1,当您需要升级AgentCraft的时候可能需要重置该变量 ，示例：1
+ EMBEDDING_DIM: embedding 维度数， 默认1024， 示例：1024
+ EMBEDDING_TIMEOUT: embedding服务访问超时时间（s） 默认600
+ EMBEDDING_TOKEN: embedding服务访问token 无需设置
+ EMBEDDING_URL： embedding服务的访问地址， 该服务可以在系统配置的时候获得 示例：http://agentcraftfunction-exxxxxxxxxx.agentcraftservice.xxxxxxx.cn-hangzhou.fc.devsapp.net/embedding
+ JWT_SECRET: AgentCraft的服务访问认证， 创建应用的时候会随机生成，建议保存为自己方便记忆的数值： 示例：a7i8
+ POSTGRES_HOST: postgresql的服务访问地址
+ POSTGRES_DATABASE: postgresql的数据库名称
+ POSTGRES_USER: postgresql的用户名
+ POSTGRES_PASSWORD: postgresql的密码
+ WORKERS： 后端服务的工作线程数，已弃用
+ ACCOUNT_ID: 阿里云的 account_id
+ REGION: 访问地域
+ ALIBABA_CLOUD_ACCESS_KEY_ID: 阿里云的 key
+ ALIBABA_CLOUD_ACCESS_KEY_SECRET: 阿里云的 secret
+ ENVIRONMENT: 当前环境，注该变量线上不用设置 示例：development
