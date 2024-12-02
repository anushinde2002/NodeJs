var express=require("express")
var fs=require("fs")
var app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({
  extended:true

}))
app.get("/",function(reqmres)
{
  res.sendFile(_dirname+"/content.html")

})
app.post("/",function(req,res)
{
  var con=req.body.con
  fs.writeFile('input2.txt',con,function(err)
  {
    if(err){
      return console.error(err)
    }
    res.send("Given data copied successfully to the input2.txt file")
    console.log("Data written successfully")
  }
)
})
app.listen(3000,function()
{
  console.log("server is running at http://127.0.0.1:3000")
})