$(document).ready(function() {
  $.getJSON("../_includes/sociales.json",function(data){


		$.each(data, function(key, value){
		    $.each(value, function(key, value){
		        var red = key;
		        var enlace = value;
		        var output = '<li class="' + red + ' ">';
		        output += '<a href=" ' + enlace + '" target="_blank">';
		        output += red;
		        output += '</a>';
		        output += '</li>';

		        $('#sociales').append(output);
		    });
		});
  });
});	