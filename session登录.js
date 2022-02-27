const express =require('express')

const app =express()

const session =require('express-session')

app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.static('./pages/'))

app.use(express.urlencoded({extended:false}))

app.post('/pages/login',function(req,res){
    if(req.body.username!='zs'||req.body.password!='123')
    {
        return res.send({
            status:0
        })
    }else {
         
        req.session.user=req.body
        req.session.islogin=true
        res.send({
            status:1
        })
    }
})
app.get('/pages/index',function(req,res){
   if(!req.session.islogin){
       return res.send({
           status:0
       })
   }else {
       return res.send({
           status:1,
           username:req.session.user.username
       })
   }

    
})
app.get('/pages/loginout',function(req,res){
    req.session.destroy()
    res.send({
        status:0
    })
})
app.listen(8082,function(){
    console.log('http://localhost:8082')
})