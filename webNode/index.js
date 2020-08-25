// const http = require('http');
// const fs = require('fs');

// function renderHtml(path, res){
//     fs.readFile(path, null, function(error, data){
//         if(error){
//             res.writeHead(404);
//             res.write(`file tidaj di temukan`)
//         } else{
//             res.write(data);
//         }
//         res.end();
//     })
// }
// var server = http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type' : 'text/html'})
//     renderHtml('index.html',res)
// })
// server.listen(3000);


// read-file-sync
const http = require('http');
const fs = require('fs');

function css(req, res){
    if(req.url === '/style.css'){
        res.writeHead(200,{'Content-Type' : 'text/css'})
        var fileContents = fs.readFileSync('./style.css',{encoding : 'utf-8'})
        res.write(fileContents)
        res.end()
    }
}

var html = fs.readFileSync('./index.html')

var server = http.createServer(function(req, res){
    css(req, res)
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.end(html);
    })
    server.listen(3000);