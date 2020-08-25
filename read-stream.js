const fs = require('fs');

//membuat obj stream u/ mambaca data dr dlm file
var rs = fs.createReadStream(`data1.txt`);

// membuat obj stream u/ nulis data dlm file
rs.on(`data`, function(data){
    console.log(data.toString());
})
