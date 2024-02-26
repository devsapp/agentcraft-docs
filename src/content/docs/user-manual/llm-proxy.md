---
title: LLM代理配置
description: LLM代理配置
---

这是一个容易跟基础模型服务容易混淆的概念，从[基础模型](/user-manual/fm-deploy)的介绍中我们已经得知，基础模型可以构建多个AI interface infra平台的连接，然而我们也知道他是完全独立的服务，在AgentCraft的智能体调用需要构建跟基础模型的关联，因此我们提出了LLM代理的概念，这个概念仅是AgentCraft在构建智能体的时候需要关联使用的，而且是在AgentCraft的持久化表关系中有所体现
![代理和基础模型](https://img.alicdn.com/imgextra/i1/O1CN014MVANJ1dofF91wm0b_!!6000000003783-0-tps-2044-1028.jpg)
需要强调的是AgentCraft 智能体通过访问LLM代理的配置来访问背后的基础模型
## 创建LLM代理
当你配置好基础模型之后，创建LLM代理将会变得简单
![LLM代理配置](https://img.alicdn.com/imgextra/i4/O1CN01HUEbTI1hINmuuBxq6_!!6000000004254-0-tps-3816-1754.jpg)
代理名称按照您方便记忆的名字进行填写，模型名注意选择对应平台的模型，也支持自定义模型名，基础模型服务地址则是您在AgentCraft构建的或者您已有的基础模型服务地址，需要注意的是
如果您是用的自己已有的基础模型服务地址，并且需要访问token的话，您可以在LLM服务访问token进行填写， AgentCraft在执行访问的时候会以
**Bearer ${token}**
的方式进行访问

当您创建完LLM代理后，就可以去添加智能体进行问答测试了
