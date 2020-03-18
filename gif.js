//Sports Icons
var topics = ['Muhammed Ali', 'Kobe Bryant', 'Lebron James', 'Michael Jordan', 'Tom Brady', 'Peyton Manning', 'Joe Montana', 'Floyd Mayweather', 'Jerry Rice', 'Tiger Woods', 'Arnold Palmer', 'Phil Mickelson', 'Roger Federer', 'Serena Williams', 'Maria Sharapova', 'Danica Patrick', 'Mike Tyson', 'Connor Mcgregor', 'Jon Jones', 'Emmit Smith', 'Magic Johnson', 'Larry Bird', 'Lisa Leslie', 'Lionel Messi', 'Cristiano Ronaldo'];

var search = '&q=SportsIcons&limit=100';

function displaySportsInfo(){
    var sportData = $(this).attr('data-name');
    var queryURL = 'https://api.giphy.com/v1/gifs/search' + sportData + 'api_key=McsnolR8TBWZheBnkbVE8Cczf83ggjI1';
}




function renderButtons(){

    $("#buttons-view").empty();

    for (var i = 0; i < topics.length; i++){
        var btn = $('<button>');
        btn.addClass('sportsmen');
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
renderButtons();