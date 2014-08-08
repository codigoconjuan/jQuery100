$(document).ready(function() {
	var titulos = $('.titulo, .subtitulo');
	$(window).scroll(function() {
	   var scrolling = $(this).scrollTop();
	   titulos.css({ 'opacity' : (1 - scrolling/200) });
	});

});