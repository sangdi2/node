const express =require('express')

const app =express()

const qq =require('./custom')
 
app.use(qq)


app.post('/user',function(req,res){
    res.send(req.body)
    
})




app.listen(8081,function(req,res){
    console.log('这是自定义的中间件')
})