const { parse } = require("path");

var total = 0.0;
for (let index = 2; index < process.argv.length; index++) {
    total += parseFloat(process.argv[index]);
}
console.log(total);