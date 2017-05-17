/*
    使用get请求参数
*/
const http = require('http');
const url = require('url');
const servers = require('./static-server');
http.createServer((request,response)=>{
    servers.initStaticServer(request,response,__dirname,'/soros');
    if(request.url.startsWith('/check')){
        let obj = url.parse(request.url,true);
        if(obj.query){
            response.writeHead(200,{
                'Content-Type':'text/plain;charset=utf8'
            })
            if(obj.query.username == 'admin' && obj.query.password == '123'){
                response.end('登录成功')
            }else {
                response.end('用户名或密码错误')
            }
        }
    }
}).listen(3000,()=>{
    console.log('服务器已启动.......');
})