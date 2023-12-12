# 备忘录

## 使用 pnpm

> [docs](https://pnpm.io/zh/)

```bash
pnpm i
pnpm i -w vue
pnpm i -Dw rollup
# 执行所有项目的 scripts.build 命令
pnpm -r build
```

## 在 pnpm-workplace 中使用 changesets 管理 CHANGELOG

> [docs](https://pnpm.io/zh/using-changesets)

```bash
##################################
# 打 TAG 是为了同步 git 和 npm 版本 #
# 升级新版本 依赖于 commitHash      #
##################################

# 1. 收集变更信息。
# 2. 测试变更代码，确认无误。
# 3. 升级新版本 (新版本会应用变更信息更新到 CHANGELOG.md)
# 4. 使用 CHANGELOG 信息提交变更代码（git commit -m <CHANGELOG>）
# 5. 新版本发布 (推送远程仓库)

pnpm changeset                          # 1. 收集变更信息。
pnpm i && pnpm lint && pnpm -r build    # 2. 测试变更代码，确认无误。
pnpm changeset version                  # 3. 升级新版本 (新版本会应用变更信息更新到 CHANGELOG.md)
pnpm i && pnpm -r build && git commit   # 4. 使用 CHANGELOG 信息提交变更代码（git commit -m <CHANGELOG>）
pnpm -r publish                         # 5. 新版本发布 (推送远程仓库)
```
