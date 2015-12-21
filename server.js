var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

//var now = moment();
//var ts = now.format("MMM Do YYYY, h:ma");

io.on('connection', function (socket) {
	console.log('User connected via socket.io');

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);

		message.ts = moment().valueOf();
		io.emit('message', message);
	});

	socket.emit('message', {
		ts: moment().valueOf(),
		text: 'Welcome to the chat app!'
	});

});

http.listen(PORT, function() {
	console.log('Server started!');
});
