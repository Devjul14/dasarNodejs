const fs = require('fs');

// membaca data dari file async
// fs.readFile('data2.txt', function(err, data){
//     if(err) console.error(err);
//     console.log(data.toString());
// })

var data = fs.readFileSync(`data1.txt`);
console.log(data.toString());