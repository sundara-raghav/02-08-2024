const file=require('fs')  // file system
// let name="sundar"
// console.log(name);
let filedata=file.readFileSync('data.txt').toString();
console.log(filedata);

// file.renameSync('data.txt','filedata.txt')  // data->filedata

// let filedata2=file.readFileSync('filedata.txt').toString();
// console.log(filedata2);

// // hyper text transfer protocol
// const http=require('http')


// const file=require('fs')
// const data=file.readFileSync('db.json').toString()


// const server=http.createServer((req,res)=>{
//    res.end(data)
// })


// server.listen(8000,"127.0.0.1",()=>{
//    console.log("server started");
// })


