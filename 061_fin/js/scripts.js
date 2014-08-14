$(document).ready(function() {
    $( "#modal" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#ventana" ).click(function() {
      $( "#modal" ).dialog( "open" );
    });
});	