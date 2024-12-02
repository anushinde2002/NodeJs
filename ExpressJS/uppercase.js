import("upper-case").then(uc=>{
  const str="Hello world using built-in module";
  console.log(uc.upperCase(str));
}).catch(err=>
{
  console.error("failed to import upper-case module",err)
}
);