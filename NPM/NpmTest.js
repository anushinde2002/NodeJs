const figlet=require('figlet');//install npm figlet by command-> npm i figlet open code with integrated terminal by right click


figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
