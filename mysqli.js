const express = require("express")
const app = express()
const mysql = require("mysql")
app.use(express.json())
const conn = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"test"
});

conn.connect((err)=>{
    if(err){
        console.log("error")
    }else{
        console.log('connected')
    }
});



conn.query("select * from users",(err,result)=>{
    console.log("done",result);
})



app.get("/",(req,res)=>{
     conn.query("select * from users",(err,result)=>{
        if(err){res.send("error in api")}
        else { res.send({"data": result})}
     })
})


app.post("/",(req,res)=>{

    const data = req.body
    conn.query('Insert INTO users SET ? ',data,(err,result,fields)=>{
        if(err) console.log(err);
        res.send(result)
    })
})


app.put("/:id",(req,res)=>{

    const data = [req.body.Name, req.body.age, req.body.Email, req.params.id]
    conn.query("UPDATE users SET Name = ?,age=?, Email=?, where Id = ?",data,(err,results,fields)=>{
        if(err) throw err;
        res.send(results)
    })
})


app.listen(5000)