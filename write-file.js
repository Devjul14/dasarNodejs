const fs = require('fs');

//menulis data dalam file
var data = `avanza
brio
xenia
fortuner
mercedes
ayla`;

// fs non blocking io / async
// fs.writeFile('data2.txt', data, function(err) {
//     if(err) console.log(err);
//     console.log(`data ditulis ke file data.txt`);
// })

// fs syncronus/ blocking io 

try {
    fs.writeFileSync(`data2.txt`, data);
console.log(`data ditulis ke file data.txt`);
} catch (error) {
    if(err) console.log(err);
}
