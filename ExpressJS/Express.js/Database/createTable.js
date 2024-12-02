var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  pass:"anushinde@123",
  port:8080

})
con.connect(function(err)
{
  if(err)
  
    throw err
    console.log("connected")
    con.query("create database mydb",function(err,result){
      if(err)
      
        throw err
        console.log("database created...")
      })
    })
    var mysql=require("mysql")
    var con=mysql.createConnection({
      host:"localhost",
      user:"root",
      pass:"anushinde@123",
      port:"8080",
      database:"mydb"
    })
    con.connect(function(err)
  {
    if(err)
      throw err
    console.log("connected!")
    var sql="create table student(rno int primary key, name varchar(255),dob date, address varchar(200)"
    con.query(sql,function(err)
  {
    if(err)
      throw err
    console.log("Table created successfully...")
  })
    }
  )

  