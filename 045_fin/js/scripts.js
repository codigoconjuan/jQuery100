

$(document).ready(function() {
	$('#flickr').jflickrfeed({
		qstrings: {
			id : '21822352@N02'
		},
		itemTemplate: '<img alt="{{title}}" src="{{image_b}}"><br/>'
	});
});
