var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080,
  database:"mydb2"
})
con.connect(function(err)
{
  if(err)
    throw err
  console.log("Connected")
  var sql1="select * from customer"
  var sql2="delete from customer where name='shreya'"
  con.query(sql2,function(err,result)
{
  if(err)
    throw err
  console.log("customer deleted successfully")
  }
  )
  con.query(sql,function(err,result)
{
  if(err)
    throw err
  console.log("after deleting record...")
  console.log(result)
})
})