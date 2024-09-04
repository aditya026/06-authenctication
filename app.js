const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('hey m hu don')
})

app.listen(3000, ()=>{
    console.log("server is running")
})