var fs=require("fs")
const bodyParser=require("body-parser")
console.log("writing into existing file")
fs.write('input.txt','welcome to web framework',function(err){
  if(err)
  {
    return console.error(err)
  }
  console.log("data written successfully..")
  console.log("lets read newly written file")
  console.log('input.txt',function(err,data)
{
  if(err)
  {
    return console.error(err)
    
    }
    console.log("Asynchronous read::",+data.toString())
    import("upper-case").then(uc=>
    {
      const str=data.toString()
      fs.writeFile('input2.txt',uc,upperCase(str),function(err)
    {
      if(err)
      {
        console.error(err)
      }
    });
    }
    ).catch(err=>{
      console.log("failed to import upper case module",err);
    });
  })
});
