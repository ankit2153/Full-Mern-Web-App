
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
});

const userModel = mongoose.model("users",userSchema)

module.exports = userModel