const http = require('http');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end(`<h1>hello</h1>`)
// }).listen(3000);

function jul(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`<h1>hello resolve</h1>`)
    }
    
http.createServer(jul).listen(3000);

console.log(`running di port 3000`);