$(document).ready(function() {
	/*
	$('#inferior').mouseenter(function() {
		alert("el mouse ha entrado a #inferior");
	});
	*/

	$('#inferior').mouseenter(function() {
		$(this).addClass('activo');
	});

	$('#inferior').mouseleave(function() {
		$(this).removeClass('activo');
	});

	
});	