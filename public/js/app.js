var socket = io();

socket.on('connect', function () {
	console.log('connect to socket.io server!');
});
