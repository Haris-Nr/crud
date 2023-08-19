const express = require('express')
const path = require('path')

const app = express()

app.set("view engine","ejs");

// app.get('/query',(req,res)=>{
//     console.log(req.query)
//     res.send(`query throung url ${req.query.name}`)
// })

// app.get('/about',(req,res)=>{
//     res.send("<h1>helo</h1>")
// })

 const publicPath = path.join(__dirname,'public');
//  app.use(express.static(publicPath))


// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/home.html`)
// })

// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/404.html`)
// })

app.get('/profile',(req,res)=>{
    const user={
        name:'haris',
        age:25,
        skills:["React","Nodejs","MongoDB","expressjs"]
        }
    res.render('profile',{user})
})



app.listen(4000,()=>{
    console.log("connected")
})