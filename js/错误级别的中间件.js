const express =require('express')



const app =express()

app.get('/',function(req,res){
    throw new Error('发生了错误')
    res.send('这是错误级别的中间件')
})

app.use(function(err,req,res,next){
    console.log(err.message)
})



app.listen(8081,function(req,res){
    console.log('这是错误级别的中间件')
})