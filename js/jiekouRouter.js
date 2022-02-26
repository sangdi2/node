const express =require('express')

const router =express.Router()

router.get('/router',function(req,res){
    res.send({
        stauts:0,
        message:'get请求成功',
        data:req.body
    })
})
router.post('/router',function(req,res){
    res.send({
        stauts:0,
        message:'post请求成功',
        data:req.body
    })
})
module.exports=router