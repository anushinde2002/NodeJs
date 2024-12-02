var express=require("express");
var bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json())
app.get("/",function(req,res){
  res.sendFile(_dirname+"/loginindex.html");
})
app.post("/",function(req,res)
{
  var user=req.body.user
  var pwd=req.body.pwd
  res.writeHead(200,{'Content-Type':'Text/html'})
  if(user==pwd)
  {
    res.write("Login successful...");
  }
  else{
    res.write("Login unsuccessful...")
  }
})
app.listen(8081,function()
{
  console.log("server is running on port https://127.0.0.1:8081")
})