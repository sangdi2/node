const mysql =require('mysql')

const db =mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'test'
})
const sql ='select * from user'
db.query(sql,function(err,results){
   if(err) return console.log(err.message)
   console.log(results)
})