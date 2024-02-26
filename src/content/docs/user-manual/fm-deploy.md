---
title: 基础模型部署
description: 如何部署自己的基础模型
---

AgentCraft在基础模型上提供两个策略，一个是帮您将中意的开源模型部署到函数计算平台(支持qwen7b,glm2,3-6b,llama2-13b等多个开原模型)，并且将接口服务提供好，另外一个是Proxy各 AI 模型接口的平台。
目前支持的AI interface infra平台有：
+ 阿里云灵积平台
+ 智普AI开放平台
+ TogetherAI

支持的模型有
+ 通义千问系列 qwen-tubo, qwen-plus,qwen-max,qwen-plus-1201,qwen-max-longcontext,Qwen-7B-Chat
+ GLM系列 glm-4-128k,glm3-turbo-128k
+ OPENAI系列 gp4-1106-preview, gp4-version-preview,gpt-4,gpt-4-32k,gpt-3.5-turbo,gpt-3.5-1106
+ LLama系列 CodeLlama-7b-Instruct-hf,CodeLlama-13b-Instruct-hf,CodeLlama-34b-Instruct-hf, Llama-2-7b-chat-hf, Llama-2-13b-chat-hf,Nous-hermes-Llama2-70b
+ 其他热门模型 零一 Yi-34B-Chat，mistralai Mixtral-8x7B-Instruct-v0.1

AgentCraft还会持续增加支持的AI interface infra平台和对应的模型，下面是计划接入的平台
+ [lepton ai](https://www.lepton.ai/)
+ [Moonshot开放平台](https://platform.moonshot.cn/docs)

## 基础模型详细操作
进入基础模型列表，选择"创建基础模型",进入基础模型内容页面
![基础模型内容](https://img.alicdn.com/imgextra/i4/O1CN01rnjcDk1s01glPHeKo_!!6000000005703-0-tps-3792-1762.jpg)
如果您选择的是代理服务，需要准备对应平台的 认证秘钥，比如这里创建灵积的基础模型服务，需要灵积的认证秘钥, 秘钥的获取我们提供了相应的链接(通常需要您自己在这些平台上进行注册)
![认证秘钥"](https://img.alicdn.com/imgextra/i3/O1CN01zGR87T1Hg2EZ2unya_!!6000000000786-0-tps-3798-1726.jpg)
如果选择私有化部署到函数计算服务，则直接创建即可
![私有化部署"](https://img.alicdn.com/imgextra/i3/O1CN01HT4jNV1dofF0HhbGy_!!6000000003783-0-tps-3824-1756.jpg)
AgentCraft会自动的帮助您构建基础模型服务

## 独立访问基础模型服务
基础模型服务可以应用在AgentCraft的智能体中，也可以作为独立的LLM API去访问，我们接下来看一下，进入基础模型详细
![基础模型详细](https://img.alicdn.com/imgextra/i2/O1CN01trvuET26oJnm2xO7C_!!6000000007708-0-tps-3820-1708.jpg)
调用服务演示
![调用服务](https://img.alicdn.com/imgextra/i2/O1CN01P3ZJfn29FSVFCRdEo_!!6000000008038-0-tps-3606-1738.jpg)

到现在你已经清晰的了解了AgentCraft的基础模型运作原理，获取您会有疑问，为什么不能直接调用这些AI平台的api，还要再经过一层转化，这里面考虑是为了能够抹平不同模型输出的数据格式差异，
使得我们可以在智能体里面无缝的切换基础的模型服务，这点在高效率构建复合型智能应用的时候会是一个关键，另外从成本优化上Multi-LLM也会有直观的帮助