const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(8000,()=>{
    console.log("Server is listening at port 8000")
})
