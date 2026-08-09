---
name: secscore
description: 使用 SecScore 云端班级工具给同学加分或扣分
---

# SecScore 操作

使用前，用户需要在 SecAgent 设置中的“SecScore 操作”页选择账号和班级。账号默认使用当前 SECTL 登录账号，也可以在该页通过 OAuth 登录其它账号。

## 给同学加减分

调用 `secscore-connector__add_score`，参数如下：

```json
{
  "student_name": "同学完整姓名",
  "score": 2,
  "reason": "课堂表现积极"
}
```

`score` 为整数，正数表示加分，负数表示扣分。`reason` 必须说明原因。调用前确认同学姓名、分值和理由；同名时先让用户补充更完整的姓名。成功后向用户说明云端已同步，并报告变更前后分数。
