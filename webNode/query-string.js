const http = require('http');
const url = require('url');
const queryString = require('querystring');


var server = http.createServer(function(req, res){
    var query = url.parse(req.url).query;
    var params = qs.parse(query)

    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(`<strong>Nama path : </strong> ${url.parse(req.url).pathname}
    
    `)
    res.write(`<strong>Daftar Parameter :</strong>
    
    `)
    


})

server.listen(3000);