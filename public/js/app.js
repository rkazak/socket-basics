var socket = io();

socket.on('connect', function () {
	console.log('connect to socket.io server!');
});

socket.on('message', function (message) {
	console.log('New msg: '+message.text);

	jQuery('.messages').append('<p>' + message.text + '</p>');

});

// Handles subbmitting of new message
var $form = jQuery('#message_form');

$form.on('submit', function () {
	event.preventDefault();

	var $msg = $form.find('input[name=message]');

	socket.emit('message', {
		text: $msg.val()
	});

	$msg.val('');

});
