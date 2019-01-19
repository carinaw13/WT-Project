//https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2505653-socket-io-let-s-go-to-real-time

var http = require('http');
var fs = require('fs');

// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Loading socket.io
var io = require('socket.io').listen(server);

// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Du bist verbunden!');
    socket.broadcast.emit('message', 'Ein anderer Client hat dir einen Mitgliedsantrag geschickt!');

    socket.on('message', function (message) {
        console.log('Der Client sagt zu dir! Er\ sagt: ' + message);
    }); 
});

server.listen(4000);