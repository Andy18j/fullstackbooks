const express = require("express")

const {bookModel} = require("../model/book.model")

const bookRouter = express.Router()


// bookRouter.post("/addbook",async(req,res)=>{
//      try{
//         const books = new bookModel(req.body)
//         await books.save()
//         res.status(201).json({msg:"books are posted sucessfully"})

//      }
//      catch(err){
//         res.status(501).json({msg:"something went wrong ❌"})
//      }
// })


bookRouter.post("/Add_Book_API",async(req,res)=>{
    try{
        const {Title,Author,Genre,Description,Price} = req.body
        const books = new bookModel({Title,Author,Genre,Description,Price})
        await books.save()
        res.status(201).json({msg:"books are posted sucessfully ✅"})
    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"something went wrong ❌"})
    }
})


bookRouter.get("/Retrieve_Books_API",async(req,res)=>{
    try{
          let book = await bookModel.find()
          res.status(201).json({msg:"books are here!!",book})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"something went wrong!! not find any data😑"})
    }
})



bookRouter.delete("/Delete_Book_API/:Title",async(req,res)=>{
    try {
        await bookModel.findByIdAndDelete(req.param.Title)
        res.status(201).json({msg:"book are deleted sucessfully!!"})

    }
    catch(err){
        console.log(err)
        res.status(501).json({msg:"books are not delted!!"})
    }
})



bookRouter.get("/Filter_Books_API/:Genre",async(req,res)=>{
    try {
        const filterGenre = req.params.Genre
        const quary = GenreFilter ? {Genre:GenreFilter} : {};
        const books = await bookModel.find(quary)
        res.status(200).json({msg:"books are filterd by its Genre",books})
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:err.msg})
    }
})



bookRouter.get("/Sort_Books_API/:sortBy",async(req,res)=>{
    try{
           const sortBy = req.params.sortBy;
           const sortorder = sortBy === "asc" ? 1 : -1;
           const books = await bookModel.find().sort({Price:sortorder})
           res.status(200).json({msg:"book are sorted by their price",books})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:"Internal server error"})
    }
})

module.exports = {
    bookRouter
}