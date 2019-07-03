var topics = ["Attack on Titan", "Kaichou Wa Maid-sama", "Naruto", "Dragon Ball Z", "The Melancholy of Haurhi Suzumiya", "Soul Eater"];
function creatButtons () {
    $("#buttons").empty();
    for (var i = 0; i <topics.length; i++) {
        var a = $("<button>");
        a.text(topics[i]);
        a.addcClass("show btn btn-anime");
        $("#buttons-view").append(a);
        a.attr("data-show", topics[i]); 
    }
}

$("#add-anime").on("click", function(event){
    event.preventDefault();
    var addAnime = $("<button>");
    $("button").append(addAnime);
    var anime = $("anime-input").val().trim();
});

$(document).on("click", "anime", displayGif);
 createButtons();
 function displayGif() {

 var anime = $(this).attr("data-anime");
 var quieryURL = "https://api.giphy.com/v1/gifs/search?q=" + anime + "&api_key=ccKMx8b8TJ8RaJJOuCaDwTM8EDmt3kCk&limit=10";

 $.ajax({
     url: quieryURL,
     method: "GET"
 })

 .then(function(response) {
     console.log(response);
     results = reponse.data;
     console.log(results);

     $.each(results, function(key,result) {
         var rating = result.rating;
         var animeDiv = $('<div class="card">');
         var p_rate = $("<t>").text(rating);
          animeImage.attr('id', 'showGif');
          animeImage.attr("data-still", results[i].images.downsized_still.url);

     })
    })