# SecScore SecAgent Connector

这是 SecAgent 侧的 SecScore 联动插件。它连接 SecScore 自动启动的本机 HTTP JSON 服务 `http://127.0.0.1:18791`，动态注册学生查询、加/扣分和撤销工具，并提供 SecScore Skill。

SecScore 服务只监听 loopback，不依赖 SecScore 插件，也不需要在 SecAgent 中配置 MCP。SecScore 未启动时插件会保持等待并每 5 秒自动重试。

安装时将 `secscore-connector-*.zip` 导入 SecAgent 插件管理器；开发打包命令为 `pnpm run build`。
