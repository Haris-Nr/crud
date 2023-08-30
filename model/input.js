const mongoose = require("mongoose")

const sheme = new mongoose.Schema(
    {
        name: String,
        email :String ,
        password:String,
    }
)

module.exports = mongoose.model('inputfield', sheme);