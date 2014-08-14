$(document).ready(function() {
	smoothScroll.init({
	    speed: 700, // Integer. How fast to complete the scroll in milliseconds
	    easing: 'easeInQuad', // Easing pattern to use
	    updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	});
});	