var http=require("https");
http.createServer(function(req,res)
{
  res.write("Hello World..!");
  res.end();

}).listen(8080);
console.log("server is running on http://127.0.0.1:8080");