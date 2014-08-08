$(document).ready(function() {
	$('#navegacion li a ').click(function(e) {
		e.preventDefault();
		$('blockquote').addClass('animacion');
	});
});	