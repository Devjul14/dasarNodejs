var Client = require('mysql2')

var conn = Client.createConnection({
    host: 'localhost',
    user: 'julia',
    password: '890',
    database: 'dbnode'
    
});

const sql = `
    UPDATE buku
    SET buku_judul = 'aritmatika',
    buku_penulis = 'julia',
    buku_penerbit = 'jakartapos'
    WHERE buku_id = '1'
    `;
conn.query(sql, function(error, result){
    if(error){
        console.log('update gagal');
        throw error;
    }
    console.log('update berhasil');
});
conn.end();
