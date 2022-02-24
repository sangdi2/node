const express = require('express')
const app = express()
app.get('/user',(req,res)=>{
    res.send(req.query)
})
app.use(express.static('../clock'))
app.post('/user:id',(req,res)=>{
    res.send(req.params)
})
app.listen(8081,(req,res)=>{
   console.log('http://127.0.0.1')
})