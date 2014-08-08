$(document).ready(function() {
	$('#animar').click(function() {
		$('h3').animate({
			fontSize: "5em",
			opacity: .3
		}, 200);
	});
});	