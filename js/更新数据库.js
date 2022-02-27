const mysql =require('mysql')

const db =mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'test'
})
const user ={id:2,username:'hh',password:'567'}
const sql ='update user set ? where id=?'
db.query(sql,[user,user.id],function(err,results){
   if(err) return console.log(err.message)
   if(results.affectedRows==1)
   {
       console.log('更新数据成功')
   }

})