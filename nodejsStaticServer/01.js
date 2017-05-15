/*
    实现服务器功能 
*/
const http = require('http');
/*http.createServer((request,response) => {
    response.write('Hello word!');
    response.end();
}).listen(3000,'192.168.14.38',()=>{
    console.log('running...........')
}); */
let server = http.createServer();
server.on('request',(request,response)=>{
    // console.log(request.headers);
    if(request.url.endsWith('index.html')){
        response.end('index')
    }else if(request.url.endsWith('about.html')){
        response.end('about')
    }else{
        response.end('页面不存在')
    }

});
server.listen(3000,'192.168.14.38',()=>{
    console.log('running.......');
})