var express=require("express")
var app=express()
app.get("/",function(req,res)
{
  res.send("Hello world..!")
})
app.listen(8080)
console.log("server running ar http://127.0.0.1:8080");