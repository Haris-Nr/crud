const express = require("express");
// mongodb connect database
const getData = require('./mongodb');
const mongodb = require("mongodb");

const app = express()
app.use(express.json())

app.get('/',async (req,res)=>{
 let data = await getData()
    data = await data.find().toArray()
    res.send(data)
})

app.post('/', async (req,res)=>{
    let data = await getData();
    let result = await data.insertOne(req.body)
    console.log('result',result);
})

app.put('/:name',async(req,res)=>{
    let data = await getData();
    let result = await data.updateOne({name:req.params.name},{$set:req.body})
    res.send(result)
    console.log('result',result);
})

app.delete('/:id',async(req,res)=>{
    let data= await getData()
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(5000)