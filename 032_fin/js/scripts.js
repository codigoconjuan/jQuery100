$(document).ready(function() {
	$('#javascript').click(function() {
		$( "#contenido" ).load( "../_includes/javascript.html" );
	});
	$('#jquery').click(function() {
		$( "#contenido" ).load( "../_includes/jquery.html" );
	});
	$('#load').click(function() {
		$( "#contenido" ).load( "../_includes/load.html" );
	});
});	