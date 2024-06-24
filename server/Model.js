// let Mongoose = require("mongoose");


// let prod = new Mongoose.Schema({
//     Name:String,
//     Img:String,
//     Price:String,
//     Desc:String,
//     Stock:Boolean
// })

// let Table = Mongoose.model("prod", prod)

// module.exports = Table



const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
    Name: String,
    Img: String,
    Price: String,
    Desc: String,
    Stock: Boolean
});

const Table1 = mongoose.model("prod", prodSchema);

module.exports = Table1;
