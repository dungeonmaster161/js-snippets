import express from 'express'
const app = express()
const PORT = 8080

app.get('/',(req,res)=>{
    res.send("Hey")
})

app.listen(PORT,(req,res)=>{
    console.log(`App is running on ${PORT}`);
})