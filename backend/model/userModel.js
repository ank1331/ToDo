const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
    },
    tasks:{
        type:[String],
    },
},
{
    timestamps:true
}); 



//userSchema.find({}).sort({title: 1, tasks:1})

module.exports = mongoose.model("NewUser", userSchema);
