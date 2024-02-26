---
title: 智能应用成本优化最佳实践
description: 如何使用AgentCraft进行成本优化
---
当前基于大语言模型构建的智能应用一但对外服务，都会面临成本的压力，该成本的主要部分可能是调用LLM产生的费用问题。 一般企业采购LLM的服务会有两种，一种是直接购买MAAS服务，按照token计费，一种是购买GPU算力进行开源模型托管

## 购买MAAS服务的优化方案
对于MAAS服务的成本优化，核心在如何利用好Multi-LLM,我们知道不同模型的调用费用是有差异的，比如GPT4的调用单价要远高于其他的基础模型。而在我们的复合型智能应用中，往往有多个场景需要用到基础模型的能力，并且对模型性能的要求并不相同，因此这里存在成本优化的空间，即对高性能要求的场景使用高级的模型，低性能的场景使用低性能的模型，从而更加合理优化模型调用的成本。AgentCraft目前虽然无法智能化的识别并路由到不同的模型服务，这也跟您自身的业务场景相关，但已经可以统一不同的基础模型的调用，通过[基础模型部署](/user-manual/fm-deploy)和[LLM代理配置](/user-manual/llm-proxy)可以无缝的在智能体中切换基础模型，比如单纯的文本提取或者内容转化类的场景，你可以使用开源的零一，LLama2等模型，而对于复杂推理的智能助手应用你可以采用qwen-plus或者gpt4
下面附上一些平台免费领取token的介绍，可以拿到价值大约300-400RMB的 token调用
### 阿里云灵积平台
可以或者价值36RMB的免费token 
+ 访问[阿里云模型服务灵积DashScope主页](https://dashscope.aliyun.com/?spm=5176.28197632.0.0.482a7e06nV9Mub)查看
![灵积费用](https://img.alicdn.com/imgextra/i4/O1CN015wNMVV1rwouyR25Lb_!!6000000005696-0-tps-2912-1768.jpg)

+ 登录灵积控制台，获取[apiKey](https://dashscope.console.aliyun.com/apiKey)
![apikey](https://img.alicdn.com/imgextra/i3/O1CN01Qiq9qz1mhdi89KJeb_!!6000000004986-0-tps-3808-1876.jpg)
+ AgentCraft创建对应的服务
![AgentCraft服务](https://img.alicdn.com/imgextra/i4/O1CN016eolef1PLRLoMOTFJ_!!6000000001824-0-tps-3610-1878.jpg)



### 智普AI 开放平台
可以获取500W免费token,价值25-500RMB 
+ 访问[智普AI开放平台](https://open.bigmodel.cn/login)查看
![智普AI开放平台](https://img.alicdn.com/imgextra/i3/O1CN01N31bRK1FocQPBdTxm_!!6000000000534-0-tps-3672-1826.jpg)
+ 登录智普AI开放平台，获取[apiKey](https://open.bigmodel.cn/usercenter/apikeys)
![智普AI开放平台](https://img.alicdn.com/imgextra/i4/O1CN010ILk4X1CqxbYQkX70_!!6000000000133-0-tps-3694-1766.jpg)
+ AgentCraft创建对应的服务
![AgentCraft服务](https://img.alicdn.com/imgextra/i3/O1CN01vIVOaw1jcC9YDfu9M_!!6000000004568-0-tps-3544-1922.jpg)   
### TogetherAI 
 可以获取价值 175RMB的免费额度（25$）
 + 访问[TogetherAI](https://www.together.ai/)查看
![TogetherAI](https://img.alicdn.com/imgextra/i4/O1CN01RA5kvb20xa7NVluMB_!!6000000006916-0-tps-3658-1904.jpg)

+ 登录TogetherAI，获取[apiKey](https://api.together.xyz/settings/api-keys)
![togetherAI apiKey](https://img.alicdn.com/imgextra/i4/O1CN01oPW7Qu1HnMZSTalqG_!!6000000000802-0-tps-3678-1702.jpg)
+ AgentCraft创建对应的服务
![AgentCraft服务创建](https://img.alicdn.com/imgextra/i1/O1CN01FOxmBx1CeauTAB8WF_!!6000000000106-0-tps-3832-1906.jpg)
### 更多TODO 
+ lepton
+ 月之暗面
## 购买算力进行开源模型托管的优化方案
基础算力的成本优化核心有几点
+ 1.购买的算力足够便宜，这个跟采购供应商相关，他们提供的基础费用及折扣率决定该成本
+ 2.优化推理，将每秒输出的token数量大幅增加
+ 3.客户层面按量计费，当用户的应用无请求应当少计费甚至不计费来节省资源成本
当然要实现2,3方案需要相当的技术投入，还得做好效果的平衡，下面方案是以第三点为切入，阿里云函数计算推出了显示计费的模式，可以在保障性能的前提下，帮助您大幅降低GPU的成本开销。

详细请参考文章[《基于函数计算快速搭建低成本LLM应用》](https://help.aliyun.com/document_detail/2699361.html)