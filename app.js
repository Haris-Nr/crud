
const express = require("express");
const EventEmitter = require("events")
const app = express();

const event = new EventEmitter()

let count = 0

event.on("count",()=>{
    count++
    console.log("api called",count)
})


app.get("/",(req,res)=>{
    res.send("called")
    event.emit("count")
})
app.get("/search",(req,res)=>{
    res.send("search")
    event.emit("count")
})
app.get("/create",(req,res)=>{
    res.send("create")
    vent.emit("count")
})

app.listen(9999)










// const fs = require('fs')
// const path = require('path')
// const os = require('os')

// console.log(os.cpus().length)
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())



/* The line `const dirPath = path.join(__dirname,"views")` is creating a variable `dirPath` that stores
the path to a directory called "views". The `path.join()` function is used to join multiple path
segments together, in this case, it joins the current directory (`__dirname`) with the "views"
directory. */
// const dirPath = path.join(__dirname,"views")
/* `console.log(dirPath)` is printing the value of the `dirPath` variable to the console. */

// console.log(dirPath)

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/apple${i}.txt`,"a simple text file")
// }



// console.log(fs.readdirSync(dirPath,{withFileTypes:true}))