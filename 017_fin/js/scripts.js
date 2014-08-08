$(document).ready(function() {
	$('#check').click(function () {
	    if ($(this).is(':checked')) {    
	        $('#enviar').removeAttr('disabled');
	    } else {
	        $('#enviar').attr('disabled', true); 
	    }
	});
});