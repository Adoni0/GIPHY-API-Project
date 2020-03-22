//Sports Icons
var topics = ['Muhammad Ali', 'Kobe Bryant', 'Lebron James', 'Michael Jordan', 'Tom Brady', 'Peyton Manning', 'Joe Montana', 'Floyd Mayweather', 'Jerry Rice', 'Tiger Woods', 'Arnold Palmer', 'Phil Mickelson', 'Roger Federer', 'Serena Williams', 'Maria Sharapova', 'Danica Patrick', 'Mike Tyson', 'Conor McGregor', 'Jon Jones', 'Emmit Smith', 'Magic Johnson', 'Larry Bird', 'Lisa Leslie', 'Lionel Messi', 'Cristiano Ronaldo'];

renderButtons(); //creates buttons for the exixting topics array

    $(document).on('click', '.sportsmen-btn', function(){
    var sportData = $(this).attr('data-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + sportData + '&api_key=McsnolR8TBWZheBnkbVE8Cczf83ggjI1&limit=10&rating';
    console.log('test');
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        var results = response.data;
        
        for (var i = 0; i < results.length; i++){
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") { //checks if gifs are rated pg or g before displaying
                
                var gifDiv = $("<div>");
  
                var rating = results[i].rating;
  
                var p = $("<p>").text("Rating: " + rating);
  
                var personImage = $("<img>");
                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;
                
                personImage.attr("src", still); //sets default display to still
                personImage.attr('data-still', still);
                personImage.attr('data-animate', animated);
                personImage.attr('data-state', 'still');
                personImage.addClass('gif-animation')

                gifDiv.append(p);
                gifDiv.append(personImage);
                
                $("#gif-images").prepend(gifDiv);
        }

    }
}
    );
});

$(document).on('click', '.gif-animation', function(){
    console.log('working');
    var currentState = $(this).attr('data-state');
    console.log(currentState);
    if(currentState === 'still'){
        $(this).attr('data-state', 'animate');
        $(this).attr('src', $(this).attr('data-animate'));
    }else{
        $(this).attr('data-state', 'still');
        $(this).attr('src', $(this).attr('data-still'));
    }
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
    
    topics.push(sport); //pushes inputted sport figure to topics array

    renderButtons();
});

