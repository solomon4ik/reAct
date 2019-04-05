$( document ).ready(function() {
   
    getColors(); // залишити тільки це 
    
    
    function getColors(){
        $.ajax({
            url: "https://api.themoviedb.org/3/trending/movie/day?api_key=db2ade1028a9ab68c675e0e1637ba200",
            type: "GET",
            success: function(users){
                $("#main-container").empty();
                var currentUsers = users.results;
                for(var i=0; i<currentUsers.length; i++){
                    $("#main-container").append("<li class='name' id='user-data'><a>"+currentUsers[i].original_title+"</a></li>" )
                }

            }
        });
    }

    $(".name").click(function (){ 
        var trendingEvent = this.innerHTML;
            getEvent();
        });
    function getEvent(){
        $.ajax({
            url: "https://api.themoviedb.org/3/trending/movie/day?api_key=db2ade1028a9ab68c675e0e1637ba200",
            type: "GET",
            success: function(users){
                $("#trending-event").empty();
                var currentUsers = users.results;
                for(var i=0; i<currentUsers.length; i++){
                    $("#trending-event").append("<img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2"+currentUsers[i].poster_path+"'></img>" +
                        "<h3>"+currentUsers[i].original_title+"</h3>" +
                        "<p>"+currentUsers[i].overview+"</p>"  )
                }

            }
        });
    }

   
    var searchUsers = document.querySelector('#search-users'),
    users = document.querySelectorAll('#user'),
    usersData = document.querySelectorAll('#user-data'),
    searchVal;

searchUsers.addEventListener('keydown', function() {
  searchVal = this.value.toLowerCase();
  
  for (var i = 0; i < users.length; i++) {
    if (!searchVal || usersData[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
      users[i].style['display'] = 'flex';
    }
    else {
      users[i].style['display'] = 'none';
    }
  }
});





});

//<img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2"+currentUsers[i].poster_path+"'></img>