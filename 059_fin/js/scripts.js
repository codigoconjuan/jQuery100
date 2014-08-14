$(document).ready(function() {
    $( "input[type=submit], a, button" ).button().click(function(e) {
        event.preventDefault();
      });
});	