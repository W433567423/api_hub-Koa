const service = require('../service/user.service')

class UserController {
  /**
   * TODO
   * @description: 事件: 用户-注册
   * @params: {}
   * @return: undefined
   * @author: tutu
   * @time: 2023/7/23 17:48
   */
  async create (ctx: any): Promise<void> {
    // 获取用户请求得到参数
    const user = ctx.request.body

    // 查询数据
    const res = await service.create(user)

    // 返回数据
    ctx.body = { res }
  }
}

module.exports = new UserController()