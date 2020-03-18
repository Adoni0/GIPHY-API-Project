//Sports Icons
var topics = ['Muhammed Ali', 'Kobe Bryant', 'Lebron James', 'Michael Jordan', 'Tom Brady', 'Peyton Manning', 'Joe Montana', 'Floyd Mayweather', 'Jerry Rice', 'Tiger Woods', 'Arnold Palmer', 'Phil Mickelson', 'Roger Federer', 'Serena Williams', 'Maria Sharapova', 'Danica Patrick', 'Mike Tyson', 'Connor Mcgregor', 'Jon Jones', 'Emmit Smith', 'Magic Johnson', 'Larry Bird', 'Lisa Leslie', 'Lionel Messi', 'Cristiano Ronaldo'];

    
    $('button').on('click', function(){
    var sportData = $(this).attr('data-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search&q=' + sportData + 'api_key=McsnolR8TBWZheBnkbVE8Cczf83ggjI1&limit=10&rating';

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){

        var results = response.data;

        for (var i = 0; i < results.length; i++){
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");
  
                // Storing the result item's rating
                var rating = results[i].rating;
  
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
  
                // Creating an image tag
                var personImage = $("<img>");
  
                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                personImage.attr("src", results[i].images.fixed_height.url);
  
                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(personImage);
  
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
        }

        // var sportDiv = $("<div class='sportsmen'>");

        // var rating = response.rating;

        // var displayRating = $("<p>").text("Rating: " + rating);

        // sportDiv.append(displayRating);
    })
}
    )
    


function renderButtons(){

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++){
        var btn = $('<button>');
        
        btn.addClass('sportsmen-btn');
        
        btn.attr('data-name', topics[i]);
        
        btn.text(topics[i]);
        
        $("#buttons-view").append(btn);
    }
}

$('#add-person').on('click', function(event){
    event.preventDefault();

    var sport = $("#sport-input").val().trim();
    topics.push(sport);

    renderButtons();
})

$(document).on("click", ".sportsmen-btn");

renderButtons();