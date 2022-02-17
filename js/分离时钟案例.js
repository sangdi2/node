const fs=require('fs');
const path =require('path')
const regcss =/<style>[\s\S]*<\/style>/;
const regjs=/<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'../index.html'),'utf8',function(err,dataStr){
  if(err)
  {
      return console.log('文件读取失败'+err.message)
  }
  
  jiecss(dataStr)
  jiejs(dataStr)
  jiehtml(dataStr)
})
function jiecss(dataStr){
  const c =regcss.exec(dataStr);
  const css=c[0].replace('<style>','').replace('</style>','');
  fs.writeFile(path.join(__dirname,'../css/clock.css'),css,function(err){
     if(err){
         return console.log('写入文件失败'+err.message)
     }
  })
}
function jiejs(dataStr){
    const j =regjs.exec(dataStr);
    const js=j[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./clock.js'),js,function(err){
       if(err){
           return console.log('写入文件失败'+err.message)
       }
    })
}
function jiehtml(dataStr){
    const html =dataStr.replace(regcss,'<link rel="stylesheet" href="./css/clock.css">').replace(regjs,'<script src="./js/clock.js"></script>');
    fs.writeFile(path.join(__dirname,'../index.html'),html,function(err){
        if(err){
            return console.log('写入文件失败')

        }
    })
}