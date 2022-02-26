const express =require('express')

const router =express.Router()

const app =express()

router.use(function(req,res,next){
    res.send('这是路由级别的中间件')
    next()
})

app.use('/',router)

app.listen(8081,function(req,res){
    console.log('这是路由级别的中间件')
})