$(document).ready(function() {
	/*
	$('#navegacion li a ').click(function(e) {
		e.preventDefault();
		$('#abajo').css({
			'backgroundColor': 'black',
			'fontSize': '20px',
			'color': 'white'
		});
	});
	*/

	$('blockquote').mouseenter(function() {
		$(this).css({
			'height': '500px',
			'fontSize': '30px'
		});
	});
	$('blockquote').mouseleave(function() {
		$(this).removeAttr('style');
	});
});