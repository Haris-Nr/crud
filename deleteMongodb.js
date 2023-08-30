const getData = require('./mongodb');


const deleteData = async () =>{
    let data = await getData();
    let result = await data.deleteOne({name:"maxpro"})

    if(result.acknowledged){
        console.log("data delete")
    }

    console.log(result)

}

deleteData()