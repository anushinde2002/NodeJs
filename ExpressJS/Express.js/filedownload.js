var express=require("express")
var app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json())
app.get('/',function(req,res)
{
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write('<form name="file download" method="post">')
  res.write('<h3>click button to download file</h3>')
  res.write('<input type="file" name="fname"><br>')
  res.write('<input type="submit"><br>')
  res.write('</form>')
})
app.post("/",function(req,res)
{
  const fn=req.body.fname
  res.download(fn)
})
app.listen(8080,function(){
  console.log("server is running on port https://127.0.0.1:8080")
})