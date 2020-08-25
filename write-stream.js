const fs = require('fs');

var data = `avanza
brio
xenia
fortuner
mercedes
ayla`;

// buat object stream untuk penulisan ke dalm file

var ws = fs.createWriteStream('data1.txt');

//menuliskan data ke file melalui objct writestream
ws.write(data, function(){
    console.log(`data ditulis ke file data.txt`);
})