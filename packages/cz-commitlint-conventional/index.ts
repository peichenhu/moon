export default {
	extends: ['@commitlint/config-conventional'],
	prompt: {
		questions: {
			type: {
				description: '选择提交类型 | Select the type of change that you’re committing',
				enum: {
					feat: {
						description: '新增功能 | A new feature',
						title: 'Features',
						emoji: '✨'
					},
					fix: {
						description: '修复缺陷 | A bug fix',
						title: 'Bug Fixes',
						emoji: '🐛'
					},
					docs: {
						description: '文档更新 | Documentation only changes',
						title: 'Documentation',
						emoji: '📚'
					},
					style: {
						description: '代码格式 | Changes that do not affect the meaning of the code',
						title: 'Styles',
						emoji: '💎'
					},
					refactor: {
						description: '代码重构 | A code change that neither fixes a bug nor adds a feature',
						title: 'Code Refactoring',
						emoji: '📦'
					},
					perf: {
						description: '性能提升 | A code change that improves performance',
						title: 'Performance Improvements',
						emoji: '🚀'
					},
					test: {
						description: '测试相关 | Adding missing tests or correcting existing tests',
						title: 'Tests',
						emoji: '🚨'
					},
					build: {
						description: '构建相关 | Changes that affect the build system or external dependencies',
						title: 'Builds',
						emoji: '🛠'
					},
					ci: {
						description: '持续集成 | Changes to our CI configuration files and scripts',
						title: 'Continuous Integrations',
						emoji: '⚙️'
					},
					chore: {
						description: '其他修改 | Other changes that don‘t modify src or test files',
						title: 'Chores',
						emoji: '♻️'
					},
					revert: {
						description: '回退代码 | Reverts a previous commit',
						title: 'Reverts',
						emoji: '🗑'
					}
				}
			},
			scope: {
				description: '选择更改范围 | What is the scope of this change'
			},
			subject: {
				description: '简短描述更改 | Write a short, imperative tense description of the change'
			},
			body: {
				description: '详细说明更改 | Provide a longer description of the change'
			},
			isBreaking: {
				description: '非兼容性更改? | Are there any breaking changes?'
			},
			breakingBody: {
				description: '非兼容性内容 | A BREAKING CHANGE commit requires a body. '
			},
			breaking: {
				description: '非兼容性描述 | Describe the breaking changes'
			},
			isIssueAffected: {
				description: '影响 issues? | Does this change affect any open issues?'
			},
			issuesBody: {
				description: '描述 issues 影响 | If issues are closed, the commit requires a body.'
			},
			issues: {
				description: '添加 issue 标识 | Add issue references (e.g. "fix #123", "re #123".)'
			}
		}
	}
};
