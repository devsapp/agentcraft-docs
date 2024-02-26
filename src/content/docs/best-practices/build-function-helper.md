---
title: 构建函数助手
description: 构建简易的函数计算助手
---
本篇文章介绍如何使用AgentCraft构建一个智能体来管理自己函数计算上部署的函数，作为初步的实用型LLM应用展示

##创建函数管理的执行工具
使用已经内置的执行工具模版，快速创建函数列表和函数详情两个执行工具
![管理函数的工具](https://img.alicdn.com/imgextra/i3/O1CN01uvPYU723Gw5Sx5o1o_!!6000000007229-0-tps-3484-1774.jpg)
![创建执行工具](https://img.alicdn.com/imgextra/i3/O1CN01XM5Rl01CfVhZFjz3m_!!6000000000108-0-tps-3520-1700.jpg)
![执行工具列表](https://img.alicdn.com/imgextra/i2/O1CN01cUiOkv1k3DWYCFjAY_!!6000000004627-0-tps-3564-1692.jpg)

## 构建智能体
![智能体](https://img.alicdn.com/imgextra/i4/O1CN012UEfx91xQenZWJZkk_!!6000000006438-0-tps-3546-1782.jpg)
添加系统提示词，以及关联刚刚创建好的执行工具
![智能体编排](https://img.alicdn.com/imgextra/i1/O1CN01mJleRl1hkmLXMUOaY_!!6000000004316-0-tps-3570-1822.jpg)
## 测试智能体
先查询当前的函数
![查询函数](https://img.alicdn.com/imgextra/i2/O1CN01zNsBkg1z7XUuirVjV_!!6000000006667-0-tps-3520-1824.jpg)
过滤出Nodejs函数
![过滤函数](https://img.alicdn.com/imgextra/i3/O1CN01avR5101IHaiHz6fy5_!!6000000000868-0-tps-3568-1824.jpg)
查询更详细的函数信息
![查询函数](https://img.alicdn.com/imgextra/i4/O1CN012oafeW1HFTGMj9vRr_!!6000000000728-0-tps-3530-1834.jpg)
此时提示词的描述不详细，进一步细化问题
![查询环境变量详细](https://img.alicdn.com/imgextra/i1/O1CN01zAFrIQ1rGE5G7HRVr_!!6000000005603-0-tps-3562-1818.jpg)
可以看到，智能体非常详细的将agentcraft后端服务包含的环境变量输出了

## 扩展
需要强调的是，本次智能体的构建只是花了2分钟，即使只是增加了列表和详细两个工具，但能提供的服务已经非常多样，包含列表，过滤，详细答案。这些能力如果按照传统的方法，可能要额外补充很多复杂的接口。
然而，虽然智能体在某些方面展示了强大的能力，但是其鲁棒性仍然是在真正生产系统落地的巨大的挑战，函数管理的智能体只是按照固定的问答，如果再加入更多的边界测试能否有好的效果还不好说，因此智能体在实际生产中或许还需要很长的距离，
当然AgentCraft会持续进行智能体的改进甚至会往复合型智能应用方向升级，不久会带来真正高实用的智能应用