const events = require('events');

var object = new events.EventEmitter();


// object.on('mulai', function(){
//     console.log('terjadi event')
// });

object.addListener('mulai', function(){
    console.log('terjadi event')
});

// object.on('selesai', function(){
//     console.log('event selesai');
// })

object.addListener('selesai', function(){
    console.log('event selesai');
})

object.emit('mulai');
for (let index = 0; index< 20; index++){
    process.stdout.write((index+1).toString()+ ' ');
}
object.emit('selesai');