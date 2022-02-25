const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send(req.query)
})
app.use(express.static('./clock'))
app.post('/',(req,res)=>{
    res.send(req.params)
})
app.listen(8081,(req,res)=>{
   console.log('http://localhost:8081')
})