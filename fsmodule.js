const fs=require('fs');


//config file
let fileContent=fs.readFileSync('f1.txt');
console.log('data of file 1->'+fileContent);


//write to the file
fs.writeFileSync('demo.txt','This is file 2');
console.log('file has been written');

//append file
fs.appendFileSync('f1.txt','This is updated data')
console.log('file has been appended')

//deleting a file
fs.unlinkSync('f2.txt')
console.log('file has been deleted')

