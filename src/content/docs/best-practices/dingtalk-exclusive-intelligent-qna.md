---
title: 将智能体接入钉钉机器人
description: 钉钉机器人结合智能体
---

钉钉是一个非常常用的日常办公软件，相信很多同学在里面进行工作答疑，那么本篇文章会展示如何将构建出来的额智能体接入钉钉机器人

## 操作指引

### Step1 进入客户端接入流程

点击 "客户端接入"->"创建客户端接入"，然后选择 第一个卡片点击 "创建"，进入列表

![image](https://img.alicdn.com/imgextra/i3/O1CN01NITnsa1Y237hJJsBn_!!6000000003000-0-tps-3526-1666.jpg)

### Step2创建钉钉机器人代理服务，并关联知识库

选择钉钉机器人，进入引导配置

![image](https://img.alicdn.com/imgextra/i3/O1CN01IAxncg1svjavNZPFL_!!6000000005829-0-tps-3532-1700.jpg)

选择要添加的知识库，点击"下一步" AgentCraft会创建一个钉钉机器人的代理服务

![image](https://img.alicdn.com/imgextra/i2/O1CN019hfHXn1h3j79RZXyZ_!!6000000004222-0-tps-3566-1660.jpg)

### Step3 配置钉钉机器人

![image](https://img.alicdn.com/imgextra/i1/O1CN01AvjVti1OdTKQoGgyD_!!6000000001728-0-tps-3556-1774.jpg)

机器人代理服务创建好之后，会返回一个服务地址和一个token。需要保存这两个信息

进入钉钉开放平台新建一个应用

![image](https://img.alicdn.com/imgextra/i3/O1CN01mfrh491UirghUkFXF_!!6000000002552-0-tps-3534-1784.jpg)

添加机器人

![image](https://img.alicdn.com/imgextra/i3/O1CN01HJkwOQ1wk3xmNMl7S_!!6000000006345-0-tps-3522-1732.jpg)

在机器人的配置中"消息接收模式"选择"HTTP模式"

![image](https://img.alicdn.com/imgextra/i2/O1CN01O0C9lb1lIcSTmrnFH_!!6000000004796-0-tps-3508-1716.jpg)

将机器人发布，然后扫码调试

![image](https://img.alicdn.com/imgextra/i4/O1CN01urQul81OxAMHH8ouf_!!6000000001771-0-tps-2534-1920.jpg)

### Step4 配置通知的webhook

![image](https://img.alicdn.com/imgextra/i4/O1CN01ejPTEp1Gx9Q7uss9g_!!6000000000688-0-tps-1414-1096.jpg)

**复制这里的webhook,回到AgentCraft的平台，点击下一步**

![image](https://img.alicdn.com/imgextra/i2/O1CN01CvuE6L22KlmmdjwuM_!!6000000007102-0-tps-3570-1758.jpg)

访问令牌这里随意填写，如果应用有鉴权的配置可以把鉴权配置填写到此处

## 知识库测试

![image](https://img.alicdn.com/imgextra/i1/O1CN01XQX7tg1Yob6jPjEM7_!!6000000003106-0-tps-2548-1332.jpg)

![image](https://img.alicdn.com/imgextra/i3/O1CN01xR4SqL1GTNfy02nwD_!!6000000000623-0-tps-3516-796.jpg)

## 技术方案说明


在完成机器人的交付能力中我们借助了事件驱动的模式，利用云产品eventbridge 完成对钉钉机器人的触达，

具体流程如下图。

![image](https://img.alicdn.com/imgextra/i2/O1CN01PQuoPZ1DuudaPFWc9_!!6000000000277-0-tps-2790-1644.jpg)

具体而言就是

1.  AgentCraft编排知识库，输出验证API
    
2.  AgentCraft构建 机器人代理服务输出代理服务访问体制
    
3.  钉钉配置机器人代理服务，并拿到机器人webhook
    
4.  AgentCraft创建Eventbridge事件总线以及事件规则和事件目标。
    

## 总结

本次展示了AgentCraft 的"连接" 能力，通过引导式的方式将智能体引入真实业务场景的诉求，解决AI能力交付最后一公里的问题，本质上是通过构建函数计算代理服务，沟通企业的一些SAAS软件，相较于企业SAAS软件自身集成的AI能力有更多的自主定制权限，当然相应的集成度也会被弱化。另外即便AgentCraft已经做了很多的辅助工作接入，但是依然存在不小的成本，所以最终如何选择还是取决于业务本身。