const express =require('express')
const app = require('./router')
const router =express()
router.use(app)
router.listen(8081,(req,res)=>{
    console.log('http://localhost:8081')
})