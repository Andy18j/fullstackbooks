const express = require("express")
// const { connection } = require("mongoose")
require("dotenv").config()
const {connection}=require("./config/db")
const {bookRouter} = require("./routes/book.routes")

const app = express()
app.use(express.json())


app.use("",bookRouter)


app.get("/",(req,res)=>{
   res.send("HOME PAGE 🏠")
})


app.listen(8000,async()=>{
    try{
         await connection
         console.log("connected to the db")
    }
    catch(err){
        console.log("Not connected to the db")
    }
    console.log(`port is running at the ${process.env.port}`)
})