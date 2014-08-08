$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 300) {
			$('body').addClass('scrolling');
		} else {
			$('body').removeClass('scrolling');
		}
	});
});