const service = require('../service/user.service')

class UserController {
  /**
   * DONE
   * @description: 事件: 用户-注册
   * @params: {}
   * @return: undefined
   * @author: tutu
   * @time: 2023/7/23 17:48
   */
  async registry (ctx: any): Promise<void> {
    // 获取用户请求得到参数
    const user = ctx.request.body

    // 将用户保存到数据库
    await service.create(user)

    // 返回数据
    ctx.body = { msg: '注册成功' }
  }

  async test (ctx) {
    console.log(ctx.user)
    ctx.body = { ok: 'ok' }
  }
}

module.exports = new UserController()
