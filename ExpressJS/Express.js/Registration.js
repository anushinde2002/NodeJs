const express=require("express")
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({
  extended:true

}))
app.use(bodyParser.json())
app.get("/",function(req,res)
{
  res.sendfile(__dirname+"/registration.html")

})
app.post("/",function(req,res)
{
  var name=req.body.name
  var email=req.body.email
  var contact=req.body.contact
  var dob=req.body.dob
  var pwd=req.body.pwd
  res.writeHead(200,{'Content-Type':'text/html'})
  if(name!="" && email!="" && contact!="" && dob!=" " && pwd!=" ")
  {
    res.write("regostration successful...")
  }
  else{
    res.write("registration unsuccessful")
  }
})
app.listen(8080,function(){
  console.log("Server is running at port https://127.0.0.1:8080");
})