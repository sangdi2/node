const express =require('express')

const app =express()
// 全局中间件
app.use(function(req,res,next){
     res.send('这是应用级别的中间件')
     next()
})

const nm =function(req,res,next){
    res.send('这是应用级别的中间件')
     next()
}

app.get('/',function(req,res){
    res.send('这是应用级别的中间件')
})
// 局部中间件
app.get('/user',nm,function(req,res){
    res.send('这是应用级别的中间件')
})

app.listen(8081,function(req,res){
    console.log('这是应用级别的中间件')
})