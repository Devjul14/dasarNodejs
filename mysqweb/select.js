var Client = require('mysql2')

var conn = Client.createConnection({
    host: 'localhost',
    user: 'julia',
    password: '890',
    database: 'dbnode'
    
});

const sql = `
    SELECT * FROM buku
    `;

conn.query(sql, function(error, result){
    if(error){
        console.log('gagal');
        throw error;
    }
    for(let i = 0; i < result.length; i++){
        let row = result[i]
        console.log('%s.%s,%s,%s',
        row['buku_id'],
        row['buku_judul'],
        row['buku_penulis'],
        row['buku_penerbit']
        );
    }
    console.log('berhasil');
});
conn.end();