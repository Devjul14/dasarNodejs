var http = require('http')
var client = require('mysql2')
var pug = require('pug')
var qs = require('querystring')
var url = require('url')

var listPug = './template/list.pug';
var addForm = './template/addform.pug';
var editForm = './template/editform.pug';

var db = client.createConnection({
    host: 'localhost',
    user: 'julia',
    password: '890',
    database: 'dbnode'
    
});

var server = http.createServer(function(req, res){
    if (req.url === '/'){
        db.query('SELECT * FROM buku', function(error, result){
            if (error){
                throw error;
            }
            var template = pug.renderFile(listPug, {books : result})
            res.end(template);
        });
    }else if(req.url === '/add'){
        switch (req.method) {
            case 'GET':
                var template = pug.renderFile(addForm)
                res.end(template);
                break;
            
            case 'POST':
                var body= ''

                req.on('data', function(data){
                    body += data;
                });

                req.on('end', function(){
                    var form = qs.parse(body)
                    var newRow = [
                        form['buku_id'],
                        form['buku_judul'],
                        form['buku_penulis'],
                        form['buku_penerbit']
                    ];

                    var sql = 'INSERT INTO buku VALUES(?,?,?,?)';
                    db.query(sql, newRow, function(error, result){
                        if(error){
                            throw error;
                        }
                        // kode untuk direct kee root
                        res.writeHead(302,{'Location' : '/'})
                        res.end();
                    })
                })
                break;
        
            default:
                console.log('method tidak dikenal');
        }
        
    }else if(url.parse(req.url).pathname === '/edit'){

        switch (req.method) {
            case 'GET':
                var id = qs.parse(url.parse(req.url).query).id;
                var sql = 'SELECT * FROM buku WHERE buku_id = ?';
                db.query(sql, [id], function(error, result){
                    if(error){
                        throw error;
                    }

                    var template = pug.renderFile(editForm, {book : result[0]})
                    res.end(template);
                })
                db.end();
                break;
            
            case 'POST':
                var body= ''

                req.on('data', function(data){
                    body += data;
                });

                req.on('end', function(){
                    var form = qs.parse(body)
                    var params = [
                        
                        form['buku_judul'],
                        form['buku_penulis'],
                        form['buku_penerbit'],
                        form['buku_id']
                    ];

                    var sql = `
                        UPDATE buku
                        SET buku_judul=?,
                            buku_penulis=?,
                            buku_penerbit=?
                        WHERE 
                            buku_id=?

                    `
                    db.query(sql, params, function(error, result){
                        if(error){
                            throw error;
                        }
                        // kode untuk direct kee root
                        res.writeHead(302,{'Location' : '/'})
                        res.end();
                    })
                })
                break;
        
            default:
                console.log('method tidak dikenal');
        }

    }else if(url.parse(req.url).pathname === '/delete'){

    }

})
server.listen(3000);
console.log('server runn in port 3000');