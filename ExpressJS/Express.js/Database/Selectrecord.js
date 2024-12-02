var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080
})
con.connect(function (err)
{
  if(err)
    throw err
  console.log("connected!")
  con.query("create database mydb2",function(err,result)
{
  if(err)
    throw err
  console.log("database created!")

})
})
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
  console.log("connected!")
  var sql="create table customer(cno int primary key,name varchar(200), address varchar(250)"
  con.query(sql,function(err)
  {
    if(err)
      throw err
    console.log("table created successfully")
  })
})
var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080,
  database:"mydb2"


  }
)
con.connect(function(err)
{
  if(err)
    throw err
  console.log("connected!")
  var sql="insert into customer(cno int primary key,cname address)values(1,'raj','pune'),(2,'shreya','mumbai'),(3,'sruti','thane');"
  con.query(sql,function(err,result){
    if(err)
      throw err
    console.log("record inserted successfully")
    var sql2="select * from customer"
    con.query(sql2,function(err,result)
  {
    if(err)
      throw err
    console.log("customer details")
    console.log(result)
  })
  })
})