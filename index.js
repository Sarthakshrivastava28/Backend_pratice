require('dotenv').config()
const express = require('express');
const app = express();
const port =process.env.PORT;

app.get('/',(req,res)=>{
    res.send('welcome')
})

app.get('/twitter',(req,res)=>{
    res.send('Sarthak Here')
})

app.get('/login',(req,res)=>{
    res.send('<h1>enter your fav kind of valo agent</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>enter your fav kind of weapon</h2>')
})


app.listen(process.env.PORT,()=>{
    console.log(`The server is working on port ${port}`)
})
