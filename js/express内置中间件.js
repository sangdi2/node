const express =require('express')

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post('/',function(req,res){
    res.send('ok')
    console.log(req.body)
})

app.post('/book',function(req,res){
    res.send('ok')
    console.log(req.body)
})


app.listen(8081,function(req,res){
    console.log('这是express内置的中间件')
})