//create directory
const fs=require('fs');
const { extname } = require('path');
let ext=extname('C:\Users\Admin\Desktop\NodeJs\f1.txt');
console.log(ext);

fs.mkdirSync('myDirectory')

//check content inside directory

let folderPath='C:\Users\Admin\Desktop\NodeJs'

let folderContent=fs.readdirSync(folderPath)
console.log('Folder Content',folderContent)

//check whether it is existing or not
let doesExist=fs.existsSync('myDirectory')
console.log(doesExist)

//remove directory
fs.rmdirSync('myDirectory')
console.log(rmdirSync)