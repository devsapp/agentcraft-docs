---
title: 数据集管理
description: 关于AgentCraft 数据集的介绍
---

数据集是AgentCraft管理私有数据的相关概念，在构建领域知识库的问答场景中作为刚需的存在。AgentCraft的数据集包含文档类型的数据集和精准类型(QA)的数据集两种，下面进行详细介绍

### 文档数据集
我们把 pdf,markdown,txt,html等非结构化的数据统一归类到文档类型的数据集中，在创建数据集的时候我们选择这个类别
![文档数据集](https://img.alicdn.com/imgextra/i3/O1CN01Jh9UAu1X6LDevtXgL_!!6000000002874-0-tps-3478-1724.jpg)

#### 文档的数据源
数据集是一个高层的抽象，我们具体的数据是作为数据源的概念存储，1个数据集可以包含多个数据源，在文档数集中添加数据源有两种方式，一种是单条的录入，即你可以一条一条的增加数据源，也可以直接录入已有的文件，目前支持，markdown,txt,pdf,html等格式的文件
##### 新建单条数据源
![单条数据源](https://img.alicdn.com/imgextra/i2/O1CN01JydGd31EL1DEaqVYz_!!6000000000334-0-tps-3214-1762.jpg)
![单条数据源展示](https://img.alicdn.com/imgextra/i2/O1CN01A4BBFB1pmcrr0lzVV_!!6000000005403-0-tps-3560-710.jpg)
##### 上传文档数据源
![上传文档](https://img.alicdn.com/imgextra/i2/O1CN01BipOnM1NPRa5JjPBS_!!6000000001562-0-tps-3564-1854.jpg)
![文档数据源效果](https://img.alicdn.com/imgextra/i2/O1CN01BcxSth21sNEKqecYf_!!6000000007040-0-tps-3540-1832.jpg)

### 精准据集（QA数据集）
精准数据集承载的是非常明确的问题和答案对，会被知识库优先检索
![精准数据集](https://img.alicdn.com/imgextra/i3/O1CN01vhWv3f1t6GhjVYnEO_!!6000000005852-0-tps-3530-1728.jpg)

#### 精准数据源
我们在精准数据集下面添加数据源，精准数据源暂时不支持文件上传，只支持单条的录入
![添加精准数据源](https://img.alicdn.com/imgextra/i4/O1CN01Le2Ijw1t8YgV93f0e_!!6000000005857-0-tps-3556-1756.jpg)
![精准数据源结果](https://img.alicdn.com/imgextra/i2/O1CN01FtOYhm1XTF1WYHaRA_!!6000000002924-0-tps-3580-858.jpg)

## 简单测试
接下来我们构建一个知识库的智能体，对添加的数据集进行关联测试
![知识库](https://img.alicdn.com/imgextra/i2/O1CN01Q4ZkSa1pZLNuQiDnN_!!6000000005374-0-tps-3550-1866.jpg)
![知识库](https://img.alicdn.com/imgextra/i4/O1CN01xVNYrg1VfUNqChrjJ_!!6000000002680-0-tps-3564-1828.jpg)

![模糊的问题](https://img.alicdn.com/imgextra/i4/O1CN01albIT51E44YhtV92k_!!6000000000297-0-tps-3544-1830.jpg)
上图中的问题命中的是文档数据集，我们可以通过”对话历史“查看上下文
![上下文](https://img.alicdn.com/imgextra/i1/O1CN01tiHcYm1fXNWeEZxdq_!!6000000004016-0-tps-3536-1802.jpg)
然后我们录入一个精准的问题,跟前面精准数据源录入的数据一致，可以看到结果是精准类型的答案
![精准问题结果"](https://img.alicdn.com/imgextra/i2/O1CN012c1iT01eCwEYP9Hjw_!!6000000003836-0-tps-3524-1808.jpg)
此时再去查看”对话历史“，我们会发现完整提示词的内容为空，这是因为通过精准的向量匹配我们拿到的最佳答案，这个答案不需要在经过LLM整合了
![完整提示词为空](https://img.alicdn.com/imgextra/i3/O1CN01yOPwEM1WVhXD5c7qb_!!6000000002794-0-tps-3526-1690.jpg)
合理的利用精准数据集和文档数据集可以提高问答效果，在[智能知识库调优]()的文章中我们会有更多介绍