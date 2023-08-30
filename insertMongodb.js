const getData = require('./mongodb');

const insertData = async ()=>{
    let db = await getData();
    let result = await db.insertOne({
        name:'note',    })
    if(result.acknowledged){
        console.log("data inserted")
    }
    console.log(result)
}

insertData()