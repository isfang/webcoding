var fs = require('fs')
var source = fs.readFileSync('111.png');

fs.writeFileSync('streamtest.png', source);
var readStream = fs.ReadStream('main.js');

var n = 0;

readStream.on('data', function(chunk) {
    n++;
    console.log(chunk.toString('utf-8'));

    readStream.pause();

    setTimeout(function(){

        console.log('hhhh');

        readStream.resume();
    }, 3000);
});
