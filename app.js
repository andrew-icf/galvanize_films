$(document).ready(function(){
  var $title = $("#title").val();
  var $genre = $("#genre").val();
  var $descrip = $("#description").val();
  var $url = $("#url").val();
  var $rating = $("#rating").val();
  var $form = $(".addMovie")
  $("#submit").click(function(event){
    event.preventDefault();

      $form.find($title),
      $form.find($genre),
      $form.find($descrip),
      $form.find($url),
      $form.find($rating)
      console.log(page);
  });

  
});
