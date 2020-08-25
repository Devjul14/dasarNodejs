var http = require('http')
var fs = require('fs')
var formidable = require('formidable')

var html = fs.readFileSync('./upload.html');
var server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    if (req.method === 'GET'){
        res.end(html);
    }else if(req.method === 'POST'){
        // MEMBUAT Object dari kelas formidable
        var form = new formidable.IncomingForm();
        // memanggil parse
        form.parse(req, function(err, fields, files){
            // memanggil file temporari
            var temFile = files.userfile.path;

        // Menentukan Tujuan file
        var destFile = './uploads/'+files.userfile.name

        // memindahkan file temporari ke  tujuan upload
        fs.rename(temFile, destFile, function(error){
            if (error){
                res.end('proses upload gagal'); throw error;
            }
            res.end('proses upload berhasiil')
        })
    })
        
    }
})
server.listen(3000);