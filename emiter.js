var events = require('events');

// membuat class turunan
class myEmiter extends events.EventEmitter{
    constructor(){
        super();
    }
}

// membuat object dari kelas my emiter
var object = new myEmiter();


object.addListener('mulai', function(){
    console.log('terjadi event')
});


object.addListener('selesai', function(){
    console.log('event selesai');
})

object.emit('mulai');
for (let index = 0; index< 20; index++){
    process.stdout.write((index+1).toString()+ ' ');
}
object.emit('selesai');