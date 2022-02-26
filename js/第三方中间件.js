const express =require('express')

const app =express()

const parser =require('body-parser')
 
app.use(parser.urlencoded({extended:false}))


app.post('/user',function(req,res){
    res.send('ok')
    console.log(req.body)
})




app.listen(8081,function(req,res){
    console.log('这是第三方的中间件')
})