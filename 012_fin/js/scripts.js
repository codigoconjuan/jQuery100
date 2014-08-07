$(document).ready(function(e) {
	$('#navegacion li a').click(function(e) {
		e.preventDefault();
		var enlace = $(this).attr('href');
		alert(enlace);
	});

	
});	