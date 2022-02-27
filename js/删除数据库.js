const mysql =require('mysql')

const db =mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'test'
})

const sql ='delete from user where id=?'
db.query(sql,2,function(err,results){
   if(err) return console.log(err.message)
   if(results.affectedRows==1)
   {
       console.log('删除数据成功')
   }

})