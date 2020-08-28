var Client = require('mysql2')

var conn = Client.createConnection({
    host: 'localhost',
    user: 'julia',
    password: '890',
    database: 'dbnode'
    
});

const sql = `
    DELETE FROM buku
    WHERE buku_id = '1'
    `;

conn.query(sql, function(error, result){
    if(error){
        console.log('data gagal di hapus');
    }
    console.log('data berhasil di hapus');
});
conn.end();