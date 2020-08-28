var Client = require('mysql2');

//membuat Object koneksi
var conn = Client.createConnection({
    host: 'localhost',
    user: 'julia',
    password: '890',
    database: 'dbnode'
    
});

// //memanggil methhod koneksi
// conn.connect(function(error){
//     if(error){
//         console.log('koneksi database gagal')
//         throw error;
//     }
//     console.log('Koneksi Berhasil')
//     conn.end();
// })

// mengirimperintah sql


const sql = `
    CREATE TABLE buku {
        buku_id CHAR(4) NOT NULL PRIMARY KEY,
        buku_judul VARCHAR(45),
        buku_penulis VARCHAR(25),
        buku_penerbit VARCHAR(30)
    }
    `;
//memanggil methhod koneksi
conn.query(sql, function(error, result){
    if(error){
        console.log(' gagal buat table')
        throw error;
    }
    console.log(' Berhasil buat table')
    
});
conn.end(); //memutus koneksi