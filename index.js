const express=require('express')
const router=require('./routes/router')
const bodyparser=require("body-parser")
const cookie=require("cookie-parser");

const port=8000;
const app=express()
app.use(express.json())
app.use(cookie())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',router)
app.listen(port,()=>{
    console.log(`server starts at port no ${port}`)
})