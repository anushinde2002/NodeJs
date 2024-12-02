var fs=require("fs")
var express=require("express")
var app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({
  extended:true
}))
app.get("/",function(req,res)
{
  res.sendFile(_dirname,+"/fs2_index.html")
})
app.post("/",function(req,res)
{
  const fn1=reg.body.fn1
  const fn2=reg.body.fn2
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write("file selected by user is"+fn1)
  fs.readFile(fn1,function(err,data)
{
  if(err)
  {
    return console.error(err)

  }
  fs.appendFile(fn2,data,"utf-8",function(err)
{
  if(err)
  {
    return console.error(err)
  }
})
})
})

