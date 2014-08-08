$(document).ready(function() {
  $.getJSON("../_includes/sociales.json",function(data){
		$.each(data, function(key, value){
		    $.each(value, function(key, value){
		        var red = key;
		        var enlace = value;
		        var output = '<a href=" ' + enlace + '">';
		        output += red;
		        output += '</a><br/>';
		        $('#contenido').append(output);
		    });
		});
  });
});	