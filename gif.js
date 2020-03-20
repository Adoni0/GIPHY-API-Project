//Sports Icons
var topics = ['Muhammad Ali', 'Kobe Bryant', 'Lebron James', 'Michael Jordan', 'Tom Brady', 'Peyton Manning', 'Joe Montana', 'Floyd Mayweather', 'Jerry Rice', 'Tiger Woods', 'Arnold Palmer', 'Phil Mickelson', 'Roger Federer', 'Serena Williams', 'Maria Sharapova', 'Danica Patrick', 'Mike Tyson', 'Conor McGregor', 'Jon Jones', 'Emmit Smith', 'Magic Johnson', 'Larry Bird', 'Lisa Leslie', 'Lionel Messi', 'Cristiano Ronaldo'];

renderButtons();

    $('button').on('click', function(){
    var sportData = $(this).attr('data-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search&q=' + sportData + 'api_key=McsnolR8TBWZheBnkbVE8Cczf83ggjI1&limit=10&rating';
    
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        var results = response.data;
        
        for (var i = 0; i < results.length; i++){
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                
                var gifDiv = $("<div>");
  
                var rating = results[i].rating;
  
                var p = $("<p>").text("Rating: " + rating);
  
                var personImage = $("<img>");
  
                personImage.attr("src", results[i].images.fixed_height.url);
  
                gifDiv.append(p);
                gifDiv.append(personImage);
                
                $("#gif-images").prepend(gifDiv);
        }

    }
}
    );
});
    


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
    
    $("#sport-input").val('');
    
    topics.push(sport);

    renderButtons();
});

// $(document).on("click", '.sportsmen-btn');

// Calling the renderButtons function to display the intial buttons
// renderButtons();