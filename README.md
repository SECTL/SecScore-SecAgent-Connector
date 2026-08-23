# SecScore SecAgent Connector

这个插件直接连接 SecScore Sync Server，不连接本机 SecScore，也不创建本地数据库。

安装后，插件会在启动时自动读取当前登录态并尝试加载已保存的账号和班级；SecAgent 设置页的“SecScore 操作”标签仍可用于首次登录、OAuth 登录其它账号或切换班级。基本积分工具 `add_score` 对 Agent 可见；同学列表、姓名搜索、分组和组员查询工具为隐藏工具，仅供需要时由宿主或 Skill 调用。

默认云端地址为 `https://secscore-api.sectl.cn`，可通过 SecAgent 进程环境变量 `SECSCORE_SYNC_SERVER_URL` 覆盖。默认账号使用 SecAgent 官方 Relay 登录态；其它账号通过 OAuth 换取独立 Relay token。当前账号和班级选择会作为插件配置持久化，但不会保存访问令牌、学生数据或积分数据；其它 OAuth 账号需要在重启后重新登录。所有查询和积分操作均直接调用 Sync Server，并等待云端响应。
