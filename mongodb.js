const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "data";
const client = new MongoClient(url);

const getData = async () => {
    let result = await client.connect();
    db = result.db(database);
    return db.collection("collection1");
};

module.exports = getData