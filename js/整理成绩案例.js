const fs=require('fs');
fs.readFile('../成绩.txt','utf8',function(err,dataStr){
     if(err)
     {
         return console.log('读取文件失败'+err.message)
     }
     console.log('读取文件成功')
      dataStr=dataStr.split(' ');
      const arr=[];
     dataStr.forEach(element => {
         arr.push(element.replace('=',':'));
     });
     const arrr=arr.join('\r\n');
     console.log(arrr);
     fs.writeFile('../整理后的成绩.txt',arrr,function(err){
        if(err)
        {
            return console.log('写入文件失败'+err.message)
        }
        console.log('写入文件成功')
    })
})

