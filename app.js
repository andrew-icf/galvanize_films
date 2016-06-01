
$(document).ready(function(){
  var $title = $("#title").val();
  var $genre = $("#genre").val();
  var $descrip = $("#description").val();
  var $url = $("#url").val();
  var $rating = $("#rating").val();
  var $form = $(".addMovie")
  $("#submit").click(function(event){
    event.preventDefault();
    $.post("https://mighty-eyrie-15280.herokuapp.com/films",
    {
      title: $title,
      genre: $genre,
      description: $descrip,
      url: $url,
      rating: $rating
    }).done(function(response){
    $(".message").text(response.message);
    $(".message").fadeIn(500).delay(2000).fadeOut(500);
    });

  });
  // $.post("https://mighty-eyrie-15280.herokuapp.com/films", function(data){
  //   console.log(data);
  // });
    // $form.find($title),
    // $form.find($genre),
    // $form.find($descrip),
    // $form.find($url),
    // $form.find($rating)
    // console.log(page);

});
