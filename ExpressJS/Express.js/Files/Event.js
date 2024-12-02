var em=require("events").EventEmitter;
function LoopProcessor(num)
{
  var e=new em()
  setTimeout(function()
{
  for(var i=1;i<=num;i++)
  {
    e.emit("BeforeProcess");
    console.log("Processing Number:"+i)
    e.emit("AfterProcess",i);

  }
},200)
return e
  }
  var lp=LoopProcessor(3)
  lp.on("BeforeProcess",function(data)
{
  console.log("About to start the process for"+data)
})
lp.on("AfterProcess",function(data)
{
  console.log("completed Processing"+data)
})
