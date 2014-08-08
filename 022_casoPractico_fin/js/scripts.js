$(document).ready(function() {
	var altura = 0;

	$('.columnas').each(function() {
		if ($(this).height() > altura) {
			altura = $(this).height();
		} 
	});

	$('.columnas').height(altura);
});	