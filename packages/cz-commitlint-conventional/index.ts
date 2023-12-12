export default {
	extends: ['@commitlint/config-conventional'],
	prompt: {
		questions: {
			type: {
				description: '选择提交类型 | Select the type of change that you’re committing',
				enum: {
					feat: {
						description: '新增功能 | A new feature',
						title: '✨Features',
						emoji: '✨'
					},
					fix: {
						description: '修复缺陷 | A bug fix',
						title: '🐛Bug Fixes',
						emoji: '🐛'
					},
					docs: {
						description: '文档更新 | Documentation only changes',
						title: '📚Documentation',
						emoji: '📚'
					},
					style: {
						description: '代码格式 | Changes that do not affect the meaning of the code',
						title: '💎Styles',
						emoji: '💎'
					},
					refactor: {
						description: '代码重构 | A code change that neither fixes a bug nor adds a feature',
						title: '📦Code Refactoring',
						emoji: '📦'
					},
					perf: {
						description: '性能提升 | A code change that improves performance',
						title: '🚀Performance Improvements',
						emoji: '🚀'
					},
					test: {
						description: '测试相关 | Adding missing tests or correcting existing tests',
						title: '🚨Tests',
						emoji: '🚨'
					},
					build: {
						description: '构建相关 | Changes that affect the build system or external dependencies',
						title: '🛠Builds',
						emoji: '🛠'
					},
					ci: {
						description: '持续集成 | Changes to our CI configuration files and scripts',
						title: '⚙️Continuous Integrations',
						emoji: '⚙️'
					},
					chore: {
						description: '其他修改 | Other changes that don‘t modify src or test files',
						title: '♻️Chores',
						emoji: '♻️'
					},
					revert: {
						description: '回退代码 | Reverts a previous commit',
						title: '🗑Reverts',
						emoji: '🗑'
					}
				}
			},
			scope: {
				description: '选择更改范围 (选填：具体项目名称)'
			},
			subject: {
				description: '填写更改主题 (必填)'
			},
			body: {
				description: '填写更改明细 (选填：换行 \\n)'
			},
			isBreaking: {
				description: '非兼容性更改 (BREAKING CHANGE)'
			},
			breakingBody: {
				description: '非兼容性主题 (BREAKING CHANGE)'
			},
			breaking: {
				description: '非兼容性明细 (BREAKING CHANGE)'
			},
			isIssueAffected: {
				description: '影响 ISSUES (OPEN ISSUES)'
			},
			issuesBody: {
				description: '影响 ISSUES 主题'
			},
			issues: {
				description: '影响 ISSUES 标识 (例如: "fix #123")'
			}
		}
	}
};
