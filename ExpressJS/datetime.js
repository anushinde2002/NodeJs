var dt=require('./date')
var http=require("http")
http.createServer(function(req,res)
{
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write("Current date and time is:"+dt.myDateTime())
  res.end()

}).listen(8080);
console.log("server running at http://127.0.0.1:8080");