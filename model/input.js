const mongoose = require("mongoose")

const sheme = new mongoose.Schema(
    {
        name: String,
    }
)

module.exports = mongoose.model('inputfield', sheme);