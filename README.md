# hub

- 简介本项目基于js，实现了一个几乎完整的api系统，包含了用户系统、说说(心情)系统、评论系统、标签系统、文件系统五个部分



### 实现的API：

- 用户系统:
  - (POST)注册
  - (POST)登录
  - (POST)鉴权(检查token是否有效)
- 说说(心情)系统:
  - (POST)发布说说的文案
  - (POST)获取说说列表
  - (GET)获取单个说说详情
  - (DELETE)用户删除其说说
  - (PATCH)用户修改其说说详情
- 评论系统:
  - (POST)发布某条说说的评论
  - (POST)发布某条说说的评论的评论
  - (PATCH)修改某条评论
  - (DELETE)用户删除其评论
  - (GET)获取说说的评论列表
- 标签系统:
  - (POST)新增标签
  - (POST)给说说打上一系列标签
  - (GET)获取所有标签
- 文件系统:
  - (POST)发布说说的配图
  - (POST)上传用户头像
  - (GET)获取用户头像