var obj=require("./cal");
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.unsubscribe(bodyParser.urlencoded({
  extended:true
}))
app.get("/",function(req,res)
{
  res.sendFile(_dirname+"/index.html");
})
app.post("/",function(req,res){
  var x=number(req.body.num1)
  var y=number(req.body.num2)
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write("addition="+obj.add(x,y));
  res.write("<br>subtraction="+obj.sub(x,y));
  res.write("<br>multiplication="+obj.mul(x,y));
  res.write("<br>division="+obj.div(x,y));
  res.write("<br>modulus="+obj.mod(x,y));

});
app.listen(3000,function()
{
  console.log("server is running ar https://127.0.0.1:3000");
})
