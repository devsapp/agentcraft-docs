---
title: 微信接入数字分身
description: 将智能体接入个人微信
---
这是一个相对有趣的尝试，将个人微信接入智能体，在某些场景下进行自动回复，通过提示词指令设置要求智能体进行有礼貌且合理的回复，帮助解决个人在某些特定时间无法及时响应的问题。本篇作为使用教程，快速实现一个微信的数字分身。

## 构建一个智能体
![创建微信智能体](https://img.alicdn.com/imgextra/i3/O1CN01mexZFK1Slx7rb0j7G_!!6000000002288-0-tps-3534-1830.jpg)

## 构建以及部署微信的客户端连接服务
![创建微信智能体](https://img.alicdn.com/imgextra/i1/O1CN01r0852c1fUAkt7aFkF_!!6000000004009-0-tps-3566-1794.jpg)
![部署](https://img.alicdn.com/imgextra/i4/O1CN01qBdPty1ge4w8cl56m_!!6000000004166-0-tps-3538-1734.jpg)

## 访问服务授权微信登录
我们通过AgentCraft访问刚才创建的微信连接服务
![微信](https://img.alicdn.com/imgextra/i1/O1CN01IahlKY27roRJainoE_!!6000000007851-0-tps-3550-1712.jpg)
跳转到FC的控制台进行操作,注意+1符号
![微信](https://img.alicdn.com/imgextra/i2/O1CN01SA4XbJ1CrsOSas9Gs_!!6000000000135-0-tps-3558-1742.jpg)
该域名页面会弹出一个微信授权的二维码
![授权](https://img.alicdn.com/imgextra/i1/O1CN01CJq9Gm1pPGfeAfzYv_!!6000000005352-0-tps-2816-1554.jpg)
用个人微信扫描后可以登入，接下来找人向你提问测试AgentCraft的相关问题
![微信](https://img.alicdn.com/imgextra/i2/O1CN01Y0i4hI1lzfgkjWirV_!!6000000004890-0-tps-3506-1730.jpg)
接下来向你提问的人会得到一个自动的回答(以下截图为web页面同步的内容，在你的个人微型中也可以看到对应的答案)
![微信](https://img.alicdn.com/imgextra/i3/O1CN01h3bMvQ1yLRuXQDxFR_!!6000000006562-0-tps-3560-1532.jpg)

## 退出
接下来退出也很简单，只需要在你的微信上"退出登录"即可