const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()


// 路由
router.get("/", async ctx => {
    ctx.body = {
        msg:"hello Koa Interfaces"
    }
})

app.use(router.routes()).use(router.allowedMethods())
const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server启动，端口号:${prot}`)
})