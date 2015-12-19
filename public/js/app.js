var socket = io();

socket.on('connect', function () {
	console.log('connect to socket.io server!');
});

socket.on('message', function (message) {
	console.log('New msg: ');
	console.log(message.text);
});

