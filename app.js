// const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

// app.use(cookieParser())

app.get('/', (req,res)=>{
    res.send('done')
})


app.listen(3000, ()=>{
    console.log("server is running")
})