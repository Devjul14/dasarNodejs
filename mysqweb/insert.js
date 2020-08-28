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
    INSERT INTO buku VALUES('B001','Paris van Java','asnj','jawapos')
    `;
//memanggil methhod koneksi
conn.query(sql, function(error, result){
    if(error){
        console.log(' gagal insert')
        throw error;
    }
    console.log(' Berhasil insert')
    
});
conn.end(); //memutus koneksi