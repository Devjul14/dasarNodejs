var Client = require('mysql2');

//membuat Object koneksi
var conn = Client.createConnection({
    host: 'localhost',
    user: 'julia',
    password: '890',
    database: 'dbNode'
    
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
//memanggil methhod koneksi
conn.query('SHOW TABLES', function(error, result){
    if(error){
        console.log('koneksi database gagal')
        throw error;
    }
    console.log('Koneksi Berhasil')
    console.log('hasil query');
    console.log(result);
    
});
conn.end(); //memutus koneksi