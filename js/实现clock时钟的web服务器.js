const http =require('http')
const fs=require('fs')
const path =require('path')
const server =http.createServer()
server.on('request',(req,res)=>{
   const url= req.url;
   let content ='<h1>404 not found</h1>'
   console.log(url+'aaaaa')
   let fpath=''
   if(url=='/')
   {
        fpath=path.join(__dirname,'../index.html')
   }else {
    fpath=path.join(__dirname,'..',url)
   }
   res.setHeader('Content-Type','text/html; charset=utf-8')
   fs.readFile(fpath,'utf8',function(err,datastr){
       if(err)
       {
           return res.end(content)
       }
       res.end(datastr)
   })
})
server.listen(8080,function(){
    console.log('server running at http://127.0.0.1')
})