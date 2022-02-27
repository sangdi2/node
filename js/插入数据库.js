const mysql =require('mysql')

const db =mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'test'
})
const user ={username:'wu',password:'567'}
const sql ='insert into user set ?'
db.query(sql,user,function(err,results){
   if(err) return console.log(err.message)
   if(results.affectedRows==1)
   {
       console.log('插入数据成功')
   }

})