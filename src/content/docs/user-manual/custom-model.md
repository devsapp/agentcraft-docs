---
title: 快速了解AgentCraft
description: 关于AgentCraft的介绍
---

AgentCraft 是一个面向开发者与企业用户的开源智能体应用开发平台，它致力于加速并简化智能体应用的构建过程。您能够便捷地将AgentCraft部署至阿里云的公共或专属环境，并确保从基本模型、应用程序直至数据完全归属您的掌控。
## 效果展示
基础指令
![AgentCraft 论文翻译](https://img.alicdn.com/imgextra/i2/O1CN01ske5Dk1i36BX2m4BE_!!6000000004356-1-tps-1777-893.gif)

知识库问答
![AgentCraft 知识库问答](https://img.alicdn.com/imgextra/i3/O1CN010RtRR01mbgYUUIp8w_!!6000000004973-1-tps-1777-893.gif)
执行工具
![AgentCraft 函数智能助手](https://img.alicdn.com/imgextra/i2/O1CN01AnUGbS1jfOvNDtIx4_!!6000000004575-1-tps-1777-893.gif)

## 功能架构
![AgentCraft功能架构](https://img.alicdn.com/imgextra/i1/O1CN01Vp44wt1FtemW2SadJ_!!6000000000545-0-tps-2232-1240.jpg)


## 为什么使用AgentCraft
AgentCraft 在构建面向企业级的智能体应用方面具备显著优势，采用灵活扩展的框架，内核主要进行鉴权，api的管控，内置了轻量的RAG和Agent 执行引擎，内核以外的扩展皆以独立组建服务的形式进行构建和部署，基础模型，工具，客户端连接服务，以及处理数据的各种工具等皆可解耦，在部署架构层面基于标准Serverless架构，托管在阿里云函数计算产品上。
工具服务的调用，数据库的调用皆可通过内部网络访问，安全可靠，此外，您还可以使用专业的网关对输出的api进行更加严格的控制来完成您的精准化商业实施。
AgentCraft 将平台应用的部署也做到了极致简单，利用 ServerlessDevs 工具可以高效便捷的进行应用的服务部署
### 丰富的基础模型
得益于阿里云强大的算力基础设施，AgentCraft 能够让您迅速部署专属的开源模型至函数计算服务，并且支持DashsSope、智普、TogetherAI等50多种基础模型的托管代理。如此一来，您可在智能体应用中自由切换模型服务，无需担忧因数据响应不兼容带来的问题。
![AgentCraft 基础模型](https://img.alicdn.com/imgextra/i1/O1CN01eG9xn622vPTDgxnlW_!!6000000007182-0-tps-3786-1922.jpg)
### 强大的可扩展性
AgentCraft 拥有一个独立的运行时内核，包括AgentRuntime、RAG、鉴权以及API服务。此外，管控页面、工具扩展、客户端接入和数据处理模块均采用独立函数的形式进行部署和扩展，这意味着能够在最大程度上并以较低的成本支持您的业务扩展需求。
![扩展工具](https://img.alicdn.com/imgextra/i4/O1CN01K5WWIu1LTRoQYltM3_!!6000000001300-0-tps-3800-1930.jpg)
### 开源与开放生态

AgentCraft 是一个完全开源开放的平台，允许您在此基础上进行二次开发。我们不仅提供了智能体平台建设的实例教程，同时也分享了利用公共云基础设施实现商业化应用的最佳实践案例。