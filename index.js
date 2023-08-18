const express = require('express')
const path = require('path')

const app = express()



// app.get('/query',(req,res)=>{
//     console.log(req.query)
//     res.send(`query throung url ${req.query.name}`)
// })

// app.get('/about',(req,res)=>{
//     res.send("<h1>helo</h1>")
// })

 const publicPath = path.join(__dirname,'public');
 app.use(express.static(publicPath))


app.listen(4000,()=>{
    console.log("connected")
})