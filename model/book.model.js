const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
   Title : String,
   Author :String,
   Genre :{
    typeof : String,
    "enum": ["Fiction", "Science", "Comic"],
   } ,
   Description : String,
   Price : Number
})


const bookModel = mongoose.model("book",bookSchema)

module.exports = {
    bookModel
}