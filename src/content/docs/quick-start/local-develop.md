---
title: 本地开发AgentCraft
description: 关于AgentCraft如何进行本地开发
---

如果您想对AgentCraft进行定制，您可以将项目拉到本地进行开发调试，下面教程会详细介绍如何操作
## 工程目录介绍
AgentCraft的核心源码工程包含两个 agentcraft-be 和 agentcraft-fe  ,它们分别是后端运行时以及前端控制服务，其中后端运行时包含了数据库连接，api管理，RAG, Agent Runtime等技术方案，是一个标准的python工程，前端控制服务则是一个 基于nextjs构建的可视化后台，包含登录注册，智能体管理，数据集管理，基础模型，LLM代理，以及客户端连接等功能，从github初始化的工程
被包含在一个src目录下，这是为了方便AgentCraft作为[Serverless Devs]()的应用模版进行部署，您可以忽略他，直接进入 agentcraft-all 以此作为根目录进行工程的控制和开发
![agentcraft目录](https://img.alicdn.com/imgextra/i1/O1CN01TJYGqY1kfgnCHa4Zg_!!6000000004711-0-tps-1048-770.jpg)
### agentcraft-be 后端工程
![agentcraft后端](https://img.alicdn.com/imgextra/i1/O1CN015uLweq1MmVurYZ286_!!6000000001477-0-tps-1006-1472.jpg)
### agentcraft-fe 前端工程
![agentcraft前端](https://img.alicdn.com/imgextra/i2/O1CN01CihnkH1g4oRIPQqxF_!!6000000004089-0-tps-984-1494.jpg)
## 开始
### 拉取代码
```shell
git clone https://github.com/devsapp/agentcraft.git && cd src/agentcraft-all
```
### 安装依赖
#### 后端工程
```shell
pip install -r requirements.txt
```
#### 前端工程
```
npm install -f
```
### 配置环境变量
参考环境变量说明文档
#### 后端工程
```shell
cd agentcraft-be && cp .env.example .env
```

#### 前端工程
```shell
cd agentcraft-fe && cp .env.example .env
```
### 工程启动
#### 后端工程
```shell
export PYTHONPATH="${PYTHONPATH}:$(pwd)"
python3 -u app/main.py

```
#### 前端工程
```shell
npm run dev
```


## 一些限制
AgentCraft 除核心前后端工程以外，还包含了几类扩展，比如基础模型，客户端连接，这些扩展是以函数插件的方式进行部署然后挂载到AgentCraft的运行时中, AgentCraft构建在阿里云的函数计算服务上时可以通过临时授权的秘钥（STS）进行插件的统一管控（创建，删除），本地如果想进行此操作需要获取您的云账号的对应AK，SK，关于如何获取阿里云ak,sk可以参考[这篇文章](https://docs.serverless-devs.com/serverless-devs/default_provider_config#%E9%98%BF%E9%87%8C%E4%BA%91%E5%AF%86%E9%92%A5%E8%8E%B7%E5%8F%96)
