/*
    测试静态服务器
*/
const http = require('http');
const staticServer = require('./static-server');
let rootDir = __dirname;
let staticDir = '/soros';


http.createServer((request,response)=>{
    staticServer.initStaticServer(request, response, rootDir, staticDir)
}).listen(3000,()=>{
    console.log('running.......')
})