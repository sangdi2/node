
const qs =require('querystring')


const fs =function(req,res,next){
    let str =''

    req.on('data',function(chunk){
       str=str+chunk
    })

    req.on('end',function(){
      const body =qs.parse(str)

      req.body =body
      next()
    })
}
module.exports=fs