const express =require('express')

const app =express()

const rt =require('./jiekouRouter')

app.use(express.urlencoded({extended:false}))

const cors =require('cors')
 
app.use(cors())
 
app.use('/api',rt)

app.listen(8081,function(){
    console.log('编写了一个接口')
})