var mysql=require("mysql")
var express=require("express")
var bodyParser=require("body-parser")
var app=express()
app.use(bodyparser.urlencoded({
  extended:true
}))
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080,
  database:"mydb1"
})
app.get("/",function(req,res){
  res.sendFile(_dirname+"/input.html")
})
app.post("/",function(req,res){
  var name=req.bodyname
  res.writeHead(200,{'Content-Tyep':'text/html'})
  console.log(name)
  con.connect(function(err)
{
  if(err)
    throw err
  con.query("select * from student where name=" "+name+" ",function(err,res)"
{
  if(err)
    throw err
  res.write("check student information on console where student name=" "+name)
    console.log(res)
  
})
})
})
app.listen(8080)
console.log("server running")


