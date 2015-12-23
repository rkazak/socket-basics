var socket = io();
var name = getQueryVariable('name') || 'Anonymous' ;
var room = getQueryVariable('room');

socket.on('connect', function () {
	console.log('connect to socket.io server!');
	console.log(name+' joined '+room);
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

var $title = jQuery('.room-title');

$title.text(room);

socket.on('message', function (message) {
	var ts = moment.utc(message.ts);
	console.log('New msg: '+message.text);
	var $message = jQuery('.messages');
	$message.append('<p><strong>' + message.name + ' ' + ts.local().format("h:mma") + '</strong></p>')	
	$message.append('<p>' + message.text + '</p>');
});

// Handles subbmitting of new message
var $form = jQuery('#message_form');

$form.on('submit', function () {
	event.preventDefault();

	var $msg = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $msg.val()
	});

	$msg.val('');
});