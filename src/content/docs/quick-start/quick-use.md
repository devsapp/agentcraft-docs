---
title: 快速体验AgentCraft
description: 介绍如何把AgentCraft快速使用起来
---

AgentCraft系统配置完成后我们来进行智能体的创建以及测试

## 登录注册
![登录注册](https://img.alicdn.com/imgextra/i2/O1CN017XXdpv1u5dm9QmG0V_!!6000000005986-0-tps-1222-942.jpg)

## 根据引导创建基础模型服务和LLM代理
![根据引导创建基础模型服务和LLM代理](https://img.alicdn.com/imgextra/i3/O1CN01TC9xmu1g6e1TuJiYY_!!6000000004093-0-tps-3558-1808.jpg)
![根据引导创建基础模型服务和LLM代理](https://img.alicdn.com/imgextra/i1/O1CN01sTdUHr1JBT1qNWMFY_!!6000000000990-0-tps-3546-1738.jpg)
## 创建智能体

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