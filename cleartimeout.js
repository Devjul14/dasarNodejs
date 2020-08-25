function helo(){
    console.log('helo')
}
//pending 3 detik
var t = setTimeout(helo, 3000);

// batalin timeout
clearTimeout(t);


// set Interval
setInterval(() => {
    console.log("julia")
}, 1000);

// lawan set interval
// var counter = 5;
// function generate() {
//     process.stdout.write(counter.toString() + ' ')
//     counter--;
//     if(counter == 0){
//         clearInterval(t)
//     }
// }
// process.stdout.write('hitung mndur:')
// var t = setInterval(generate,1000);