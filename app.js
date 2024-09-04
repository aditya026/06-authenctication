const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.cookie('name', 'aditya')
    res.send('done')
})

app.listen(3000, ()=>{
    console.log("server is running")
})