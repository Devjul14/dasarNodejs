const http = require('http');

var server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.end(`<h1>halaman home</h1>`)
    }else if(req.url === '/about'){
        res.end(`<h1>halaman about</h1>`)
    }else if(req.url === '/product'){
        res.end(`<h1>halaman product</h1>`)
    }else{
        res.statusCode = 404;
        res.end(`<h1>halaman product</h1>`)
    }
        
})
server.listen(3000);