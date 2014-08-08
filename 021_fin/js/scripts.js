$(document).ready(function() {
	/*
	if ($(window).width() < 500) {
	   $('body').addClass('mobile');
	}
	else {
	   $('body').addClass('desktop');
	}
	*/

	$('.cuadro').each(function() {
		if( $(this).height() < 400 ) {
			$(this).addClass('verde');
		}  else {
			$(this).addClass('azul');
		}
	});


});