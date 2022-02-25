const express =require('express')
const app =express.Router()
app.get('/',(req,res)=>{
    res.send(req.query)
})
app.use(express.static('./clock'))
app.post('/',(req,res)=>{
    res.send(req.params)
})
module.exports=app