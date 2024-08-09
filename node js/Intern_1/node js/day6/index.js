const file = require('fs')
console.log("sundar")
let name="ronak"
console.log(name);
let filedata=file.readFileSync('data.txt').toString();
console.log(filedata);


// // data.txt->filedata
// // file.renameSync('data.txt','filedata.txt')  // data->filedata
// // filedata read
// // before writing to the file
// // let filedata2=file.readFileSync('filedata.txt').toString();
// // console.log(filedata2);
// // filedata.txt
// // data1.txt
// // filedata.txt <- data.txt
// // data1.txt-> filedata.txt
// // filedata.txt <- data1.txt
// // file.renameSync('data1.txt','filedata.txt')
// // file.writeFileSync('filedata.txt','this is file data wrote')
// //after writing to file
// // let filedata3=file.readFileSync('filedata.txt').toString();
// // console.log(filedata3);
// file.appendFileSync('filedata.txt','hello world')
// file.rmdirSync('testfolder')
// const http=require('http')
// const file=require('fs')
// const data=file.readFileSync('db.json').toString()
// const server=http.createServer((req,res)=>{
//    res.end(data)
// })


// server.listen(8000,"127.0.0.1",()=>{
//    console.log("server started");
// })



