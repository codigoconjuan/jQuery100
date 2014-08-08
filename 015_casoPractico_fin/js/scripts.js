$(document).ready(function() {
	
	
	$('#navegacion li a').click(function() {
		var enlace = $(this).attr('href');
		$('.ocultar').hide();
		$(enlace).show();
	});
});