---
title: 智能知识库调优
description: AgentCraft上如何进行知识库调优
---
本篇文章介绍如何基于AgentCraft构建智能知识库以及进行效果调优，
其中知识库的问答效果是最被关注的，决定着该类应用的成功失败，当前业内基于RAG技术做了非常多的技术上的优化，期望来提升知识库的问答效果，AgentCraft内置了一个基础的RAG模型，本篇文章不准备深入这项技术去探讨知识库的效果优化， 而是从数据源和反馈校正两个方向来提升知识库的问答效果
## 数据预处理
数据高质量能够提升问答效果这是一个业内的共识，大多数用户的非结构化数据可能包含非常的的无效数据，我们可以首先用AgentCraft构建一个清晰数据的智能体，然后利用这个智能体进行数据清洗，再把返回的数据重新写入数据库
### QA 提取智能体设置
将输入的内容进行QA对提取， 结果输出为json，json的格式如下：
```json
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
输入
![输入](https://img.alicdn.com/imgextra/i2/O1CN01McngTm1z8ugX2Ylzh_!!6000000006670-0-tps-3538-1814.jpg)
输出
![输出](https://img.alicdn.com/imgextra/i2/O1CN01oGBIQf25fKPTX6r9O_!!6000000007553-0-tps-3494-1836.jpg)

注意，上面是用了chat的方式进行演示，实际上我们在业务生产的时候，想实现自动化还是使用api的方式，因此，我们可以通过智能体的接入访问获得api，然后把他集成到自己的处理流程中
![api访问](https://img.alicdn.com/imgextra/i4/O1CN01Qg0tYW1DmfVXTu5FT_!!6000000000259-0-tps-3808-1910.jpg)

## 反馈校正
基于智能系统的问答结果可以从历史记录中查看，我们可以根据结果的反馈去校正原始的数据信息，以及可以加入一些明确的QA问答，来不断地收敛问答的失败率，最后达到一个较好的问答效果。
比如我们提问”AgentCraft有哪些使用场景“，如果问题不符合我们的预期，我们可以有两种方式进行修正
![AgentCraft使用场景](https://img.alicdn.com/imgextra/i2/O1CN014EsYPb1hUkU28ET5K_!!6000000004281-0-tps-3528-1822.jpg)
### 修改文章知识库的源数据
![AgentCraft的使用场景](https://img.alicdn.com/imgextra/i4/O1CN01ozSrU31EqcXcG9Ke1_!!6000000000403-0-tps-3542-1734.jpg)
去掉多余的文章内容，接下来我们再次测试看效果：
![调试后的效果](https://img.alicdn.com/imgextra/i2/O1CN01prUS0r1D4hU6Tf81l_!!6000000000163-0-tps-3570-1814.jpg)

### 修改进准问答的数据
因为进准数据的召回权重大于文档数据，当我们希望命中一个精准问题的时候给定优化的答案，我们可以引入精准问答，比如我们先提问，AgentCraft的特色有哪些，看一下常规的答案：
![特色](https://img.alicdn.com/imgextra/i2/O1CN0163g2nP1akasOvTiO0_!!6000000003368-0-tps-3562-1818.jpg)
这个问题回答的比较泛，并不出彩，我们希望AgentCraft能够更加形象具体的回答这个问题，这个时候可以增加一个精准类的数据集
![特色](https://img.alicdn.com/imgextra/i4/O1CN01vitFHt1QnfNNWy7va_!!6000000002021-0-tps-2644-1412.jpg)
![特色](https://img.alicdn.com/imgextra/i2/O1CN01K5nVh91rY5WwCMMBW_!!6000000005642-0-tps-3458-1728.jpg)
创建好数据集我们将其关联到智能体，重新提问
![特色](https://img.alicdn.com/imgextra/i3/O1CN01FBP1i51oZyJRFCgwf_!!6000000005240-0-tps-3538-1848.jpg)
![特色](https://img.alicdn.com/imgextra/i1/O1CN01qNnF9t1fxU6U1CF4v_!!6000000004073-0-tps-3550-1848.jpg)
可以看到，针对这个精准的问题，AgentCraft可以给定精准的答案，我们的答案设定不仅仅是纯文本，甚至是丰富的图文展示