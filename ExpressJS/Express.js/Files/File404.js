var fs=require("fs")
var express=require("express")
var app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({
  extended:true
}))
app.get("/",function(req,res)
{
  res.sendFile(_dirname+"/Fs3_index.html")
})
app.post("/",function(req,res)
{
  const fn1=req.body.fn1
  fs.open(fn1,"r+",function(err,fd)
{
  if(err)
  {
    return res.status(404).send({message:"file not found error"})
  }
  fs.readFile(fn1,function(err,data)
{
  if(err)
  {
    return console.error(err)
  }
  console.log("Asynchronous read:"+data.toString())
})
})
})
app.listen(8080)
console.log("server is running at https://127.0.0.1:8080");
