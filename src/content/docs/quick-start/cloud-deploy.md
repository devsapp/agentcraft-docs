---
title: 云端部署AgentCraft
description: 使用阿里云快速部署AgentCraft服务进行体验
---

本教程将一步一步的引导您进行AgentCraft服务的云端部署，以便您能够快速体验AgentCraft的服务能力。过程中您可能需要开通部分的阿里云相关云产品，我们会在构建及部署流程中帮您做好相应的指引，所有来的云产品都提供了免费的试用方案，具体可以查看阿里云免[费试用界面](https://free.aliyun.com/?crowd=enterprise&spm=5176.13203013.2bjh0ediu.5.3d9631f9WFvYBK)，我们文档中也会给您相关的提示

## 开通并访问阿里云函数计算产品
### 免费领取函数计算资源包
[领取页面](https://free.aliyun.com/?crowd=enterprise&spm=5176.13203013.2bjh0ediu.5.3d9631f9WFvYBK)
![函数计算免费资源包](https://img.alicdn.com/imgextra/i1/O1CN01l0NNbL1S3z6PTTKNa_!!6000000002192-0-tps-3752-1906.jpg)
## 创建及部署AgentCraft应用
[访问函数计算应用中心](https://fcnext.console.aliyun.com/applications), 进入“人工智能”Tab，访问“AgentCraft”应用模版进行应用创建
![AgentCraft应用模版](https://img.alicdn.com/imgextra/i1/O1CN01nvDgQ21EdnRylDXUY_!!6000000000375-0-tps-3564-1794.jpg)

在应用创建详情，根据指引进行授权操作
![AgentCraft应用授权](https://img.alicdn.com/imgextra/i2/O1CN01pLPCyi1EcQGJODr2h_!!6000000000372-0-tps-3576-1836.jpg)
资源配置部分请注意“AgentCraft的JWT认证秘钥”, 填写您容易记住的秘钥，该秘钥可以在您创建另外一个版本的AgentCraft的时候使用，可以保证前后两个版本数据访问一致性（比如您应用程序是两个版本的代码，但是数据库还是连接同一个）
![AgentCraft应用资源配置](https://img.alicdn.com/imgextra/i1/O1CN01AkEPzx1c7mXkfDlYE_!!6000000003554-0-tps-3414-1148.jpg)
配置好之后请点击按钮“创建应用”,接下来您只需要等待一分钟即可完成AgentCraft的服务部署，部署过程的日志您可以随时查看
![AgentCraft应用部署](https://img.alicdn.com/imgextra/i2/O1CN01sXIM9Y1EF43pABXvf_!!6000000000321-0-tps-3546-1828.jpg)
## 访问及配置AgentCraft服务
当部署完成，您可以获取两个域名，（页面上另外一个域名被隐藏在+1后面），AgentCraft是由一系列的服务构成，其中核心的就是前端的管控页面和后端的api服务，当您需要完全定制自己的界面的时候可以以后端的Api服务为主（那个被隐藏的），对于新手而言我们访问开放出来的域名即可
![AgentCraft前端页面](https://img.alicdn.com/imgextra/i3/O1CN01jnMH0L1QLjDMZpvNH_!!6000000001960-0-tps-3544-1836.jpg)
之后进入AgentCraft的系统配置页面
![AgentCraft系统配置](https://img.alicdn.com/imgextra/i3/O1CN01jgT7gh1MP9iTjofN1_!!6000000001426-0-tps-2404-1720.jpg)
### 配置数据库（必须）
您需要填写您的 ***Postgresql*** 配置,如果您已经有相应的数据库，可以将相应的配置进行填写，如果您还没有对应的数据库，在阿里云上有两种方式获得
1. 免费的数据库服务，如果您是数据库的新用户，可以访问阿里云的具体可以查看[这里](https://free.aliyun.com/?product=1384)
![函数计算免费资源包](https://img.alicdn.com/imgextra/i2/O1CN01oFRh8s25zTpwmbdm3_!!6000000007597-0-tps-3710-1894.jpg)
2. 购买阿里云的数据库服务，这部分的引导方案在AgentCraft已经内置，您可以点击 “快速获取”按钮进行查看，这里我们已经将购买的流程做了极简的优化，另外实例购买最低可以按天付费，您可以以最低成本进行体验
![阿里云数据库购买](https://img.alicdn.com/imgextra/i3/O1CN01go4Gu425XXg4HPZyi_!!6000000007536-0-tps-3180-1900.jpg)
![AgentCraft数据库引导](https://img.alicdn.com/imgextra/i4/O1CN01DUTtAB1RZkxhZ1GRR_!!6000000002126-0-tps-3352-1856.jpg)
AgentCraft的数据库创建引导详细的展示了如何获取 数据库连接地址、数据库名、数据库账号、数据库密码 的配置项，建议仔细阅读

### 向量转化服务(非必填)
向量转化服务可以将文本内容进行向量化处理，用于知识库搜索中的RAG技术，该部分作为并非必须的选项，（在通用Prompt提示场景和Agent场景并不是必须），因此您可以选择性的配置使用，
![AgentCraft向量转化服务配置"](https://img.alicdn.com/imgextra/i3/O1CN01t4EiBP23rZlr4gasa_!!6000000007309-0-tps-2372-1228.jpg)
如果您的确需要一个embedding服务，您可以点击“快速获取embedding服务”，需要注意的是，该服务依赖于阿里云的NAS文件存储，因为我们利用NAS进行了模型的存储（使用的是bge-lagre-zh模型，大约1.4个G）,所以您还需要对相关的NAS服务进行开通，[NAS服务的免费领取](https://free.aliyun.com/?product=1358)
![AgentCraft向量转化服务配置"](https://img.alicdn.com/imgextra/i2/O1CN01cGwkQb1dAMOAorBfi_!!6000000003695-0-tps-2878-1554.jpg)
![免费领取NAS服务](https://img.alicdn.com/imgextra/i2/O1CN01n3SbZI1T4jMZRdf6D_!!6000000002329-0-tps-3802-1886.jpg)

当一些准备就绪之后您可以点击"下一步"以及最后的“完成”，接下来我们进入”快速使用体验AgentCraft“的教程