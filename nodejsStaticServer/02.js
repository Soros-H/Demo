/*
    实现静态服务器
*/
 const http = require('http');
 const path = require('path');
 const fs = require('fs');
 const mime = require('./mime.json');
 let staticDir = '/soros';
 let rootDir = 'C:\\Users\\Lan\\Desktop\\nodejs';
 let port = 3000;
 http.createServer((request,response)=>{
    if(request.url.startsWith(staticDir)){
        let filename = path.basename(request.url);
        fs.readFile(path.join(rootDir,staticDir,filename),(err,data)=>{
            let ext = path.extname(request.url);
            let cType = 'text/html';
            if(mime[ext]){
                cType = mime[ext];
            }
            if(mime[ext].startsWith('text')){
                cType += ';charset=utf8';
            }
            response.writeHead(200,{
                'Content-Type':cType
            })
            response.end(data);
        });
    }
 }).listen(port,()=>{
     console.log('running...........')
 })