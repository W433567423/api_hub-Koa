const fs = require('fs')

const useRoutes = (app) => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.ts') return
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}
module.exports = useRoutes
export {}
