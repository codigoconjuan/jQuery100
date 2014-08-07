$(document).ready(function() {
	/*
	$('#navegacion li a').click(function() {
		alert('has hecho click');
	});
	*/

	$('#navegacion li a').click(function(e) {
		e.preventDefault();
		$(this).hide()
	});

	


});	