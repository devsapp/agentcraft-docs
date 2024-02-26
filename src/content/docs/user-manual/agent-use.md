---
title: 智能体创建
description: 了解关于智能体的一切
---
## 介绍
智能体是AgentCraft平台的核心概念，智能化解决用户场景需求的关键
![智能体](https://img.alicdn.com/imgextra/i1/O1CN014ATzH129iJSFGlnlA_!!6000000008101-0-tps-3574-1822.jpg)
## 智能体分类
智能体有简单问答，知识库和智能助手三种类别，以下是三者的区别
![智能体区别](https://img.alicdn.com/imgextra/i1/O1CN01nOQOTy1n9Zrr4OCwH_!!6000000005047-0-tps-1636-1026.jpg)
## 前置依赖
+ [LLM代理-(必须)](/user-manual/llm-proxy)
+ [数据集-（非必须）](/user-manual/dataset)
+ [执行工具（非必须）](/user-manual/action-tools)
## 详细创建使用
### 简单问答类
所谓简单问答仅在原有的基础模型之上设置系统指令，要求其做一些提取分类，数据转化的工作
设定提示词
```
将输入的内容进行QA对提取， 结果输出为json，json的格式如下：
[
    {
        "question": "山西老陈醋的主要原料是什么?", 
        "answer": "山西老陈醋的主要原料是高粱、麸皮、谷糠和水。"
    }, 
    {
        "question": "山西老陈醋的酿造工艺特点是什么?", 
        "answer": "山西老陈醋的酿造工艺特点是以高粱为主的多种原料配比,以红心大曲为主的优质糖化发酵剂,低温浓醪酒精发酵,高温固态醋酸发酵,熏醅和新醋长期陈酿。"
    }]
注意只输出json结果，不要有其他的额外字符
```
![简单问答](https://img.alicdn.com/imgextra/i2/O1CN01Sab1FD1SzEbqkeZUE_!!6000000002317-0-tps-3544-1828.jpg)
(第一次创建无反应，请刷新页面)
接下来我们进入问答界面，输出一些非机构化的数据查看效果
输入
![输入](https://img.alicdn.com/imgextra/i2/O1CN01McngTm1z8ugX2Ylzh_!!6000000006670-0-tps-3538-1814.jpg)
输出
![输出](https://img.alicdn.com/imgextra/i2/O1CN01oGBIQf25fKPTX6r9O_!!6000000007553-0-tps-3494-1836.jpg)

### 知识库类
知识库类的智能体会从我们传入的数据进行解读，跟简单问答不同的在于，多了一个数据源的操作，根据引导我们先把数据上传
![数据源1](https://img.alicdn.com/imgextra/i1/O1CN01qOWeKe1Y5iI8Yakwo_!!6000000003008-0-tps-3514-1804.jpg)
![数据源2"](https://img.alicdn.com/imgextra/i4/O1CN01SUWTu91lLpEIUFf7f_!!6000000004803-0-tps-3482-1828.jpg)
![数据源3](https://img.alicdn.com/imgextra/i2/O1CN01emVehp1V6gHTxAwDW_!!6000000002604-0-tps-3498-1804.jpg)
![问答效果](https://img.alicdn.com/imgextra/i3/O1CN018P4QxL23isFHCrtzL_!!6000000007290-0-tps-3530-1820.jpg)

### 智能助手类
智能助手类的智能体跟前面两类最大的区别在于工具的调用，AgentCraft内置了一些工具，当然也支持您完全自定义工具
![智能助手类"](https://img.alicdn.com/imgextra/i1/O1CN01PYlk901laTu5mJ8n0_!!6000000004835-0-tps-3554-1798.jpg)
我们这里新建一个绘画工具
![绘画工具](https://img.alicdn.com/imgextra/i3/O1CN016XIEgG27fRkAnaKYY_!!6000000007824-0-tps-3546-1786.jpg)
![绘画工具](https://img.alicdn.com/imgextra/i1/O1CN01AMgc6J208HkxOdQuy_!!6000000006804-0-tps-3554-1832.jpg)
使用效果如下
![使用效果](https://img.alicdn.com/imgextra/i3/O1CN01DaOig21FAJZTlTDAB_!!6000000000446-0-tps-3548-1834.jpg)


## 为什么要分成三种类别？
本质上是背后的执行技术差异
+ ***简单问答*** 实际上是对基础大语言模型的提示词控制，通过输入系统提示词设定和参数的调整来让智能体具备某些特定场景的能力，比如翻译，内容转换，文案提取，情感识别等，该类简单并且能在许多场景中使用，
+ ***知识库*** 则是采用了RAG技术，将本地知识库内容引入，能够一定程度解决大语言模型的幻觉问题，适合用在智能客服，企业内部数据问答等场景，AgentCraft的RAG技术是将精准QA和模糊检索文档做了融合，即当用户的问题跟系统设定的问答高度一致时，直接返回结果，不用再次经过大语言模型去识别整理，当不满足的时候采取向量检索内容并且使用LLM对返回的内容做解读
+ ***智能助手*** 借助ReAct推理模式，实现了一套简易的Agent调用能力，可以进行注册工具的调用，当然也可以将知识库的RAG（AgentCraft在智能助手中将RAG作为内置工具，当用户勾选知识库选项的时候，会注册到智能助手中）结合进去，不过这里面存在一个难点，就是如何让模型区分问题直接回到还是去调用内置的RAG工具，所以虽然智能助手兼容了知识库的能力，但在某些专业场景中可能没有直接使用知识库的效果更好，此外值得一提的是智能助手因为是循环使用提示词控制，会消耗更多的token， 后续可以优化的方向是对于支持function call的模型直接改成fc调用，减少token的消耗