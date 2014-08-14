$(document).ready(function() {
    var tecnologias = [
      "Apache",
      "JavaScript",
      "PHP",
      "WordPress",
      "Drupal",
      "HTML5",
      "CSS3",
      "Drupal",
      "Laravel",
      "Angular",
      "Backbone",
      "Ruby On Rails",
      "Django",
      "jQuery",
      "Perl",
      "Grunt",
      "Gulp",
      "NodeJS",
      "Express",
      "Python",
      "Jade",
      "EJS"
    ];
    $( "#busqueda" ).autocomplete({
      source: tecnologias
    });
});	