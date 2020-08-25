var http = require('http')
var pug = require('pug')
var server = http.createServer(function(req, res){
    var data = {data: ['julia', 'eka', 'yanti']};
    var template = pug.renderFile('variable.pug', data);

    res.end(template);
});
server.listen(3000);
console.log('running');