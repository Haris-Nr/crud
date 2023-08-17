const app = require('express')()





app.get('/query',(req,res)=>{
    console.log(req.query)
    res.send(`query throung url ${req.query.name}`)
})

app.get('/about',(req,res)=>{
    res.send("<h1>helo</h1>")
})




app.listen(4000,()=>{
    console.log("connected")
})