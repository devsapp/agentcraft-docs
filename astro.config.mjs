import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AgentCraft文档',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '从这里开始',
					items: [
						{ label: '云端部署使用', link: '/quick-start/cloud-deploy' },
						{ label: '快速体验AgentCraft', link: '/quick-start/quick-use' },
						{ label: '本地开发', link: '/quick-start/local-develop' },
						{ label: '环境变量说明', link: '/quick-start/env' },
						{ label: '相关概念介绍', link: '/quick-start/category' },
					],
				},
				{
					label: '使用手册',
					items: [
						{ label: '智能体创建', link: '/user-manual/agent-use' },
						{ label: '基础模型部署', link: '/user-manual/fm-deploy' },
						{ label: 'LLM代理配置', link: '/user-manual/llm-proxy' },
						{ label: '数据集管理', link: '/user-manual/dataset' },
						{ label: '执行工具创建', link: '/user-manual/action-tools' },
						{ label: '客户端接入', link: '/user-manual/client-connect' }
					],
				},
				{
					label: '应用及最佳实践',
					items: [
						{ label: '智能应用成本优化最佳实践', link: '/best-practices/cost-optimization' },
						{ label: '构建智能知识库以及效果调优', link: '/best-practices/knowledge-base-optimization' },
						{ label: '钉钉接入专属智能问答', link: '/best-practices/dingtalk-exclusive-intelligent-qna' },
						{ label: '微信接入数字分身', link: '/best-practices/wechat-connect-digital-twin' },
						{ label: '部署独立web站', link: '/best-practices/deploy-independent-web-site' },
						{ label: '构建函数助手', link: '/best-practices/build-function-helper' },
						{ label: '定制儿童绘本智能助手', link: '/best-practices/customized-kids-storybook-intelligent-assistant' },
					],
				},
				{
					label: '社区',
					items: [
						{ label: '寻求支持', link: '/community/seek-support' },
						{ label: '成为贡献者', link: '/community/become-contributor' },
					],
				},
				{
					label: '扩展',
					items: [
						{ label: '什么是智能体', link: '/extension/intelligent-agent' },
						// { label: 'Serverless遇上AI应用', link: '/extension/serverless-ai-applications' },
						// { label: 'AgentCraft整体架构设计', link: '/extension/agentcraft-overview-architecture' },
					],
				},
				{
					label: '常见问题',
					items: [
						{ label: '常见问题', link: '/faq/faq' },
					],
				},
				{
					label: '政策',
					items: [
						{ label: '开源许可', link: '/policy/open-source-license' },
						{ label: '免责声明', link: '/policy/disclaimer' }
						
					],
				},

			],
		}),
	],
});
