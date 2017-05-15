/*
    封装静态服务器
*/
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
let info404 = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>404</title></head><body><div style="width:100%;text-align:center;font-size:70px;color:red;font-weight:900;font-family:宋体">404</div><p style="width:100%;text-align:center;font-size:20px">找不到页面，想知道原因？自己找！0.0！</p></body></html>'

exports.initStaticServer = (request, response, rootDir, staticDir) => {
    if (request.url.startsWith(staticDir)) {
        let filename = path.basename(request.url);
        fs.readFile(path.join(rootDir, staticDir, filename), (err, data) => {
            let ext = path.extname(request.url);
            let cType = 'text/html';
            if (err) {
                response.end(info404);
                return;
            }
            if (mime[ext]) {
                cType = mime[ext];
            }
            if (mime[ext].startsWith('text')) {
                cType += ';charset=utf8';
            }
            response.writeHead(200, {
                'Content-Type': cType
            })
            response.end(data);
        });
    }
}