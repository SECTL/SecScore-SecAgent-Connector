# SecScore SecAgent Connector

这个插件直接连接 SecScore Sync Server，不连接本机 SecScore，也不创建本地数据库。

安装后，SecAgent 设置页会出现“SecScore 操作”标签，可选择当前登录账号或通过 OAuth 登录其它账号，再选择账号加入的班级。基本积分工具 `add_score` 对 Agent 可见；同学列表、姓名搜索、分组和组员查询工具为隐藏工具，仅供需要时由宿主或 Skill 调用。

默认云端地址为 `http://127.0.0.1:8787`，可通过 SecAgent 进程环境变量 `SECSCORE_SYNC_SERVER_URL` 覆盖。所有查询和积分操作均携带 SECTL Bearer token，积分操作直接调用 `/v1/operations` 并等待云端响应。
