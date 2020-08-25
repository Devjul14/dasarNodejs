const http = require('http');
const qs = require('querystring');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'})

    if(req.url === '/'){
        switch (req.method) {
            case 'GET':
                res.end(`
                <h2> form penanganan</h2>
                <form action="/" method="POST">
                    Nama:
                    <input type="name" name="nama" />
                    Email:
                    <input type="email" name="email" />

                    <input type="submit" name="btnSubmit" value="kirim" />
                </form>
                `)                
                break;

            case 'POST':
                 var body = '';
                 req.on('data', function(data){
                     body += data
                     
                 })
                 req.on('end', function(){
                     var form = qs.parse(body)
                    res.end(`data dikirim:<br />
                    Nama: ${form['nama']}<br />
                    Email: ${form['email']}
                    `);
                 })
                 
                    
                    break;
            
            default:
                res.end(`method gak dikenal`)
        }
    }
});


server.listen(3000);