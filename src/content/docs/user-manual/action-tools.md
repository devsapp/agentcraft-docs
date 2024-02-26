---
title: 执行工具创建
description: 关于AgentCraft的执行工具介绍
---

执行工具是智能体扩展任务的关键所在，我们讲AI能够感知和跟世界交互，主要就是通过挂载执行工具的方式，本篇文章详细介绍AgentCraft的执行工具构建和使用

## 基于模版创建
AgentCraft提供了5个工具的模版 分别是文生图，代码解释器，函数列表，函数详细，web搜索。您可以直接选中对应的模版进行快速创建
![工具模版](https://img.alicdn.com/imgextra/i1/O1CN01lXKWg125MYAocMeT3_!!6000000007512-0-tps-3426-1738.jpg)
AgentCraft的工具函数同样部署在阿里云函数计算云产品上，因此该操作会触发对应函数的部署。
## 自定义
在我们还未能提供足够丰富的内置工具的情况下，您需要自己定制工具，本质上就是写一个真实的执行函数以及填写执行工具的描述
![自定义](https://img.alicdn.com/imgextra/i1/O1CN01QvEXbF1d6EpGxMUAV_!!6000000003686-0-tps-3742-1894.jpg)

以文生图这个工具函数作为举例
### 函数创建
首先访问函数计算控制台，进行[函数的创建](https://fcnext.console.aliyun.com/cn-hangzhou/functions/create) ![函数创建](https://img.alicdn.com/imgextra/i3/O1CN01tngaKh1u5dm7tjiQC_!!6000000005986-0-tps-3832-1918.jpg)
您可以选在自己熟悉的开发语言python,js等进行开发
### 函数编写
接下来进行代码编辑，比如我选择用python语言，构建了一个image_gen的函数，并且对应的代码如下
```python
# -*- coding: utf-8 -*-
import logging
import json
import urllib.parse

def handler(event, context):
    logger = logging.getLogger()
    evt = json.loads(event)
    logger.info(evt)
    prompt = evt["prompt"]  # 这里的参数名跟action-tools天蝎的时候保持一致
    prompt = urllib.parse.quote(prompt)
    return json.dumps({'image_url': f'https://image.pollinations.ai/prompt/{prompt}'}, ensure_ascii=False)


```

![工具函数](https://img.alicdn.com/imgextra/i4/O1CN01q9Kdkg1MJCZCHsVjC_!!6000000001413-0-tps-3772-1826.jpg)
### 执行工具关联函数
回到AgentCraft平台，进行函数的关联以及参数描述和工具描述的填写,你可以通过搜索函数名找到该函数![搜索函数名](https://img.alicdn.com/imgextra/i4/O1CN01N7TOpZ23LW2oow81p_!!6000000007239-0-tps-3820-1970.jpg)，具体的工具描述和参数的描述如下图![工具描述](https://img.alicdn.com/imgextra/i2/O1CN01eFvaG01Hr1jxWcyLo_!!6000000000810-0-tps-2794-1888.jpg)，可以看到参数中定义了prompt ，这个参数会被LLM进行生成，然后AgentCraft的调用引擎会执行你的函数并且传递这个参数

当一切准备就绪之后，你就可以在你的智能体中添加该工具了
![绘画工具](https://img.alicdn.com/imgextra/i1/O1CN01AMgc6J208HkxOdQuy_!!6000000006804-0-tps-3554-1832.jpg)
使用效果如下
![使用效果](https://img.alicdn.com/imgextra/i3/O1CN01DaOig21FAJZTlTDAB_!!6000000000446-0-tps-3548-1834.jpg)