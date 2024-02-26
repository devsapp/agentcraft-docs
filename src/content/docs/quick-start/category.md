---
title: AgentCraft相关概念
description: AgentCraft的相关概念介绍
---

AgentCraft 本身是一个智能体的平台，包含一些特定领域的概念，本篇文章将对这些概念进行梳理，方便您的理解

## 工作空间
工作空间为抽象概念，主要用于智能体的集中管理
![工作空间](https://img.alicdn.com/imgextra/i3/O1CN01ZfuAic21HjXl769bb_!!6000000006960-0-tps-3542-1688.jpg)
### 智能体
智能体是AgentCraft平台的核心概念，智能化解决用户场景需求的关键
![智能体](https://img.alicdn.com/imgextra/i1/O1CN014ATzH129iJSFGlnlA_!!6000000008101-0-tps-3574-1822.jpg)
智能体有简单问答，知识库和智能助手三种类别，以下是三者的区别
![智能体区别](https://img.alicdn.com/imgextra/i1/O1CN01nOQOTy1n9Zrr4OCwH_!!6000000005047-0-tps-1636-1026.jpg)
### 数据集
数据集是对数据类型的抽象，数据集下面可以包含多个数据源，数据集可以直接跟智能体进行关联，比如一个知识库智能体可以包含多个数据集， 数据集又包含多个数据源
![数据集](https://img.alicdn.com/imgextra/i4/O1CN01JuHOqv26TFa8jA1CC_!!6000000007662-0-tps-3572-1824.jpg)
### 数据源
数据源是原始数据，包括问答数据和文档数据，其中文档数据是指内容比较宽泛的数据切片，比如从 markdown,text,excel中提取的数据，切片之后可以作为文档类的数据源，而问答数据源则是固定的问答类型，其要求问题和答案都比较明确，这个可以方便做进一步的问答效果提升
![数据源](https://img.alicdn.com/imgextra/i3/O1CN01oZrlSo1JzOCSS7o7j_!!6000000001099-0-tps-3558-1818.jpg)
### LLM代理
LLM代理是在各种基础模型服务之上抽离的一层概念，为了在智能体消费的时候可以平滑的切换不同的模型，LLM代理要求接入的服务统一以OpenAI的请求响应格式作为规范,并且AgentCraft会在LLM代理添加对应的认证token，以加强安全访问
![LLM代理](https://img.alicdn.com/imgextra/i4/O1CN013tjNTA1d3wqPopZ1Z_!!6000000003681-0-tps-3532-1796.jpg), 
### 基础模型
基础模型是只可访问的LLM API 服务，AgentCraft平台可以创建 阿里云灵积， 智普AI, TogetherAI,OpenAI的APi代理服务，也可以将开源模型直接托管到FC,目前支持的LLM类型有
Chatgpt, Qwen, GLM, LLama等约60+
![基础模型](https://img.alicdn.com/imgextra/i1/O1CN01qhJbW31ynO4Qy2Qy6_!!6000000006623-0-tps-3568-1854.jpg)
### 执行工具
AgentCraft 提原子化的执行工具函数的编写及调用，我们内置了5款工具，但您可以基于函数计算扩展无数过您自己的工具能力，我们后续会把这些工具也开源出去
![执行工具](https://img.alicdn.com/imgextra/i2/O1CN01goQ2bU1qokJoCFEb4_!!6000000005543-0-tps-3544-1742.jpg)
### 客户端接入
AgentCraft可以将构建的智能体服务接入到常用的客户端，比如独立的web站和 钉钉，微信等，每个客户端接入背后本质上也是一个服务，比如钉钉的接入是将钉钉机器人配置以及阿里云事件总线服务（Eventbridge）进行关联，然后服务互通， 微信的接入则是引入wechaty这个三方库来实现个人微信跟智能体服务的打通，而独立的web站则是基于开源NextjsChatGpt部署的对话服务，理论上，依托于各类的ipaas服务，比如集简云，影刀等，您可以集成数百款现有的App
![客户端接入](https://img.alicdn.com/imgextra/i2/O1CN01RYe6v91PCjp9AvdyY_!!6000000001805-0-tps-3486-1818.jpg)