$(document).ready(function() {

	var website = new Date(2014,8,1,12,0,0,0);
	$('#contador').countdown({until:website});


	//$('#contador').countdown({until: +300});

	//$('#contador').countdown({until: '+2d'});
});	