var express=require("express");
const bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded(
{
  extende:true
}));
app.use(bodyParser.json());
app.length("/",function(req,res)
{
  response.writeHead(200,{'Content-Type':'text/html'});
  response.write('<form name="file input" method="post">');
  response.write('<h1>select file to upload</h1></br><br>');
  response.write('<input type="file" name="fname"></br><br>');
  response.write('<input type="submit" value="upload">');
  response.write('<form>');
  response.end();
});
app.post("/",function(req,res)
{
  const filename=reg.body.fname;
  res.writeHead(200,{'Content-Type':'Text/html'});
  res.write("file selected by user is"+filename);

});
app.listen(8080);
console.log("server is running at https://127.0.0.1");
