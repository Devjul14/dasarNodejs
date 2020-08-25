var fs = require('fs');

var sumber = './data.txt';
var tujuan = './new/newData.txt';

fs.rename(sumber, tujuan, function(err){
    if(err) console.log(err)
    console.log(`data berhasil rename`);
})