/*
    动态网站  01
*/
const http = require('http');
const url = require('url');
const static = require('./static-server');
const path = require('path');
const fs = require('fs');
const data = require('./stuinfo');

http.createServer((request,response)=>{
    static.initStaticServer(request,response,__dirname,'/soros');
    if(request.url.startsWith('/query')){
        let obj = url.parse(request.url,true).query;
        let stu = data[obj.code];
        fs.readFile(path.join(__dirname,'./template.html'),'utf8',(err,data)=>{
            let html = data.replace('&&code&&',obj.code);
            html = html.replace('&&name&&',stu.name);
            html = html.replace('&&age&&',stu.age);
            html = html.replace('&&sex&&',stu.sex);
            response.end(html);
        })
    }
}).listen(3000,()=>{
    console.log('服务器已启动.............')
})