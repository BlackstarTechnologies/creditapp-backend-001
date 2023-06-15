require("./src/process.pre")
const express = require('express')
const app = express()


const PORT  = !process.env.PORT? 3000 : process.env.PORT

app.use("*", require("./src/index"))
app.get("/helloworld",(req,res)=>res.send({message:"hello world"}))
app.get("/",(req,res)=>res.redirect("/helloworld"))

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
})