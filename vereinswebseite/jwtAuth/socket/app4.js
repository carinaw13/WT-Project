var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('./index.js', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Lädt socket.io
var io = require('socket.io').listen(server);

// Wenn ein Client sich verbindet, wird folgendes ausgegeben auf der Konsole
io.sockets.on('connection', function (socket) {
    socket.emit('message', 'Du bist verbunden!');
    socket.broadcast.emit('message', 'Ein anderer Client hat dir einen Mitgliedsantrag geschickt!');

    socket.on('message', function (message) {
        console.log('Der Client sagt zu dir! Er\ sagt: ' + message);
    }); 
});

server.listen(4000);