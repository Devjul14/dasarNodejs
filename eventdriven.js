// modul http
const http = require('http');


//event hendler
function onRequest (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h2>Hello</h2>`);
    response.end();
}

const server = http.createServer();

// membuat server dari object http (callback function)
server.on('request', onRequest);

// port 
server.listen(3000);
console.log('running di 3000');