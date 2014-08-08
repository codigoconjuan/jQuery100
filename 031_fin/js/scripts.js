$(document).ready(function() {
	// $('#medio').find('li.dentro').next().css('backgroundColor', 'green');

	var enlaces = $('#abajo li'); 

	$(document).click(function(e) {
		$(e.target).closest(enlaces).css('backgroundColor','green');
	});
});	