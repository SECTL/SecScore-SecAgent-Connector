---
name: secscore
description: 通过本机 HTTP 连接 SecScore，查询学生积分并执行加分、扣分或撤销；写入前确认目标学生，写入后使用返回结果核对。
---

# SecScore Agent 操作入口

本 Skill 由 SecAgent 的 SecScore Connector 提供。SecScore 端是普通 loopback HTTP JSON 服务，不使用 MCP。所有操作使用带 `secscore-connector__` 前缀的工具；不要直接读写 SecScore 数据库或文件。

## 工作流程

1. 查询学生时优先调用 `secscore-connector__find_students`；有明确完整名单需求时调用 `secscore-connector__list_students`。
2. 加分或扣分前确认学生身份、分值和原因；优先传返回结果中的 `student_id`。
3. 调用 `secscore-connector__add_score`，其中 `delta` 为正数表示加分，负数表示扣分。
4. 写入成功后核对返回的 `val_prev`、`val_curr`、`event_uuid`。
5. 用户要求撤销时调用 `secscore-connector__undo_score`，传入对应 `event_uuid` 和 `student_id`。

## 工具速查

- `find_students`：参数 `{"query":"姓名片段","limit":20}`。
- `list_students`：参数可为空，也可传 `{"limit":1000}`。
- `add_score`：参数 `{"student_id":1,"delta":2,"reason_content":"课堂表现"}`；也可使用 `student_name`。
- `undo_score`：参数 `{"event_uuid":"...","student_id":1}`。

任何写操作都必须使用用户明确给出的目标和分值；同名学生无法仅凭记忆猜测时，应先列出候选并请求确认。
