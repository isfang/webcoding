var fs = require('fs');

var readStream = fs.createReadStream('1.mp4');
var writeStream = fs.createWriteStream('2.mp4');

readStream.on('data', function(chunk){
    if(writeStream.write(chunk) === false) {
        console.log('still cached');
        readStream.pause();
    }
});

readStream.on('end', function(){
    writeStream.end();
    console.log('enddddd');
});

writeStream.on('drain', function() {
    console.log('data drain');
    readStream.resume();
});
