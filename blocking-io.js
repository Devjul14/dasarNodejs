
// non blocking io
// console.log('perintah pertama');
// setTimeout(function(){
//     console.log('perintah kedua')
// },200)
// console.log('perintah ketiga');

// blocking io
//pake lib fs buat baca file dr luar
const fs = require('fs');

console.log('persiapan membaca file...');
// var data = fs.readFileSync('data2.txt')
// console.log(` Isi File:`);
// console.log(data.toString());
// console.log(`File selesai di baca ..`)

fs.readFile('data2.txt', function(err, data){
if (err) console.error(err)
console.log(` Isi File:`)
console.log(data.toString());

})
console.log(`File selesai di baca ..`)