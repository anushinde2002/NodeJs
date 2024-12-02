var mysql=require("mysql")
var con=con.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080
})
con.connect(function(err){
  if(err)
    throw err
  console.log("Connected!")
  con.query("create database mydb",function(err,result){
    if(err)
      throw err
    console.log("database created!")
  })
  }
)
var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080,
  database:"mydb"
})
con.connect(function(err)
{
  if(err)
    throw err
  console.log("connected")
  var sql="create table student(rno int primary key, name varchar(200),dob date, address varchar(200))"
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
  database:"mydb"
})
con.connect(function(err){
  if(err)
    throw err
  console.log("connected!")
  var sql="insert into student(rno,name,dob,address) values(1,'Ram','2-08-2002','Pune'),(2,'Shyam','05-05-2003','mumbai'),(3,'adi','09-05-2007','thane'),(4,'rushi','02-01-2000','palghar')"
  con.query(sql,function(err,result)
{
  if(err)
    throw err
  console.log("record inserted successfully")
  var sql2="select* from student";
  con.query(sql,function(err,result)
{
  if(err)
    throw err
  console.log("student details")
  console.log(result)
})
})
})