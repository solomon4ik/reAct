var myObj, 
    myResul = "";
myObj = {"page":1,"results":[{"adult":false,"backdrop_path":"/lvjscO8wmpEbIfOEZi92Je8Ktlg.jpg","genre_ids":[53,9648,18,14,878],"id":450465,"original_language":"en","original_title":"Glass","overview":"In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.","poster_path":"/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg","release_date":"2019-01-16","title":"Glass","video":false,"vote_average":6.5,"vote_count":1913,"popularity":285.204},{"adult":false,"backdrop_path":"/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg","genre_ids":[28,35,12,14],"id":287947,"original_language":"en","original_title":"Shazam!","overview":"A boy is given the ability to become an adult superhero in times of need with a single magic word.","poster_path":"/xnopI5Xtky18MPhK40cZAGAOVeV.jpg","release_date":"2019-03-23","title":"Shazam!","video":false,"vote_average":7.3,"vote_count":256,"popularity":172.69},{"adult":false,"backdrop_path":"/wtZj5nn6hVwgakPdg6y6gm3eFXU.jpg","genre_ids":[28,12,878],"id":424783,"original_language":"en","original_title":"Bumblebee","overview":"On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.","poster_path":"/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg","release_date":"2018-12-15","title":"Bumblebee","video":false,"vote_average":6.5,"vote_count":1736,"popularity":176.271},{"adult":false,"backdrop_path":"/h3KN24PrOheHVYs9ypuOIdFBEpX.jpg","genre_ids":[16,10751,12],"id":166428,"original_language":"en","original_title":"How to Train Your Dragon: The Hidden World","overview":"As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.","poster_path":"/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg","release_date":"2019-01-03","title":"How to Train Your Dragon: The Hidden World","video":false,"vote_average":7.7,"vote_count":1289,"popularity":424.866},{"adult":false,"backdrop_path":"/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg","genre_ids":[28,12,14,878],"id":297802,"original_language":"en","original_title":"Aquaman","overview":"Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.","poster_path":"/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg","release_date":"2018-12-07","title":"Aquaman","video":false,"vote_average":6.8,"vote_count":5095,"popularity":118.132},{"adult":false,"backdrop_path":"/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg","genre_ids":[12,878,28],"id":299534,"original_language":"en","original_title":"Avengers: Endgame","overview":"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.","poster_path":"/dHjLaIUHXcMBt7YxK1TKWK1end9.jpg","release_date":"2019-04-24","title":"Avengers: Endgame","video":false,"vote_average":0.0,"vote_count":0,"popularity":130.413},{"adult":false,"backdrop_path":"/mWLljCmpqlcYQh7uh51BBMwCZwN.jpg","genre_ids":[27,53,28,878,12,18,9648],"id":522681,"original_language":"en","original_title":"Escape Room","overview":"Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.","poster_path":"/8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg","release_date":"2019-01-03","title":"Escape Room","video":false,"vote_average":6.4,"vote_count":598,"popularity":99.068},{"adult":false,"backdrop_path":"/1ltcMaCX5kPOEA4NFTSBnvBFNbY.jpg","genre_ids":[14,18,35],"id":423949,"original_language":"en","original_title":"Unicorn Store","overview":"A woman named Kit moves back to her parent's house, where she receives a mysterious invitation that would fulfill her childhood dreams.","poster_path":"/rGe3eWy3F3qggDZMc86bASN4I7C.jpg","release_date":"2017-09-11","title":"Unicorn Store","video":false,"vote_average":7.3,"vote_count":22,"popularity":8.455},{"adult":false,"backdrop_path":"/9cPMIuB2tv4IP0LbeNhrK5OyDy5.jpg","genre_ids":[16,10751,35,12],"id":527729,"original_language":"fr","original_title":"Astérix - Le Secret de la Potion Magique","overview":"Following a fall during mistletoe picking, Druid Getafix decides that it is time to secure the future of the village. Accompanied by Asterix and Obelix, he undertakes to travel the Gallic world in search of a talented young druid to transmit the Secret of the Magic Potion.","poster_path":"/wmMq5ypRNJbWpdhC9aPjpdx1MMp.jpg","release_date":"2018-12-05","title":"Asterix: The Secret of the Magic Potion","video":false,"vote_average":7.1,"vote_count":230,"popularity":32.855},{"id":500682,"video":false,"vote_count":196,"vote_average":7.0,"title":"The Highwaymen","release_date":"2019-03-15","original_language":"en","original_title":"The Highwaymen","genre_ids":[80,18,53],"backdrop_path":"/pZ78ksjPlXf3q2EeONN8WdHE03Y.jpg","adult":false,"overview":"In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.","poster_path":"/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg","popularity":109.686},{"adult":false,"backdrop_path":"/wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg","genre_ids":[10751,14,12],"id":338952,"original_language":"en","original_title":"Fantastic Beasts: The Crimes of Grindelwald","overview":"Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.","poster_path":"/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg","release_date":"2018-11-14","title":"Fantastic Beasts: The Crimes of Grindelwald","video":false,"vote_average":6.9,"vote_count":4225,"popularity":93.803},{"adult":false,"backdrop_path":"/jmbgxBd86MshzQQvv5laKvOKoMm.jpg","genre_ids":[28,12,14,10751],"id":454294,"original_language":"en","original_title":"The Kid Who Would Be King","overview":"Old-school magic meets the modern world when young Alex stumbles upon the mythical sword Excalibur. He soon unites his friends and enemies, and they become knights who join forces with the legendary wizard Merlin. Together, they must save mankind from the wicked enchantress Morgana and her army of supernatural warriors.","poster_path":"/kBuvLX6zynQP0sjyqbXV4jNaZ4E.jpg","release_date":"2019-01-16","title":"The Kid Who Would Be King","video":false,"vote_average":5.9,"vote_count":68,"popularity":87.015},{"id":299537,"video":false,"vote_count":3392,"vote_average":7.2,"title":"Captain Marvel","release_date":"2019-03-06","original_language":"en","original_title":"Captain Marvel","genre_ids":[28,12,878],"backdrop_path":"/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg","adult":false,"overview":"The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.","poster_path":"/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg","popularity":368.019},{"adult":false,"backdrop_path":"/88poTBTafMXaz73vYi3c74g0y2k.jpg","genre_ids":[10751,16,35,14],"id":404368,"original_language":"en","original_title":"Ralph Breaks the Internet","overview":"Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, \"Sugar Rush.\" In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.","poster_path":"/lvfIaThG5HA8THf76nghKinjjji.jpg","release_date":"2018-11-20","title":"Ralph Breaks the Internet","video":false,"vote_average":7.2,"vote_count":2109,"popularity":71.772},{"adult":false,"backdrop_path":"/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg","genre_ids":[28,12,16,878,35],"id":324857,"original_language":"en","original_title":"Spider-Man: Into the Spider-Verse","overview":"Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.","poster_path":"/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg","release_date":"2018-12-07","title":"Spider-Man: Into the Spider-Verse","video":false,"vote_average":8.5,"vote_count":3068,"popularity":85.428},{"adult":false,"backdrop_path":"/bTeRgkAavyw1eCtSkaww18wLYNP.jpg","genre_ids":[80,18,53],"id":504172,"original_language":"en","original_title":"The Mule","overview":"Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.","poster_path":"/oeZh7yEz3PMnZLgBPhrafFHRbVz.jpg","release_date":"2018-12-14","title":"The Mule","video":false,"vote_average":6.5,"vote_count":1112,"popularity":102.649},{"adult":false,"backdrop_path":"/w7MsyOpP003FYhsiTgVHa3rNsrz.jpg","genre_ids":[18,10751,12],"id":508763,"original_language":"en","original_title":"A Dog's Way Home","overview":"A Dog’s Way Home chronicles the heartwarming adventure of Bella, a dog who embarks on an epic 400-mile journey home after she is separated from her beloved human.","poster_path":"/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg","release_date":"2019-01-10","title":"A Dog's Way Home","video":false,"vote_average":6.6,"vote_count":125,"popularity":72.321},{"adult":false,"backdrop_path":"/jnOuttTfG9KKpmOZtprC4pA1AlZ.jpg","genre_ids":[878,28,12,14,53],"id":428078,"original_language":"en","original_title":"Mortal Engines","overview":"Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.","poster_path":"/uXJVpPXxZO4L8Rz3IG1Y8XvZJcg.jpg","release_date":"2018-11-27","title":"Mortal Engines","video":false,"vote_average":6.0,"vote_count":1349,"popularity":65.185},{"adult":false,"backdrop_path":"/n2aX63BmW7zIKgKJ58e6rKlSsdi.jpg","genre_ids":[27,53],"id":157433,"original_language":"en","original_title":"Pet Sematary","overview":"Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.","poster_path":"/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg","release_date":"2019-04-04","title":"Pet Sematary","video":false,"vote_average":6.3,"vote_count":30,"popularity":104.99},{"adult":false,"backdrop_path":"/rURV5xPzt9ZxEXAc4OQmxchGyZ8.jpg","genre_ids":[53,80,18,28],"id":471507,"original_language":"en","original_title":"Destroyer","overview":"Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.","poster_path":"/sHw9gTdo43nJL82py0oaROkXXNr.jpg","release_date":"2018-12-25","title":"Destroyer","video":false,"vote_average":6.3,"vote_count":68,"popularity":37.978}],"total_pages":1000,"total_results":20000}
for (var i = 0; i< myObj.results.length; i++) {
    myResul += "<div class='movie'><span class='user-movie'><span class='user-name'><a href='#' onclick='NowShowing()'>"+myObj.results[i].original_title+"    </a></span></span></div>";
  
}
document.getElementById("movies-container").innerHTML = myResul;

    



var searchMovies = document.querySelector('#search-movies'),
    movies = document.querySelectorAll('.movie'),
    moviesData = document.querySelectorAll('.user-movie'),
    searchVal;

searchMovies.addEventListener('keydown', function() {
  searchVal = this.value.toLowerCase();
  
  for (var i = 0; i < movies.length; i++) {
    if (!searchVal || moviesData[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
      movies[i].style['display'] = 'flex';
    }
    else {
      movies[i].style['display'] = 'none';
    }
  }
});

function NowShowing() {
  var xhr = new XMLHttpRequest();
  var data = [];
  // document.getElementById("result").innerHTML = 'Now Showing';
  document.getElementById("movies-container").innerHTML = '';

  xhr.open('GET', encodeURI('https://api.themoviedb.org/3/trending/movie/day?api_key=db2ade1028a9ab68c675e0e1637ba200'));
  xhr.onload = function() {
      if (xhr.status === 200) {
          //alert('User\'s name is ' + xhr.responseText);
          data.push(xhr.responseText);
          var mydata = JSON.parse(data);
      } else {
          alert('Request failed.  Returned status of ' + xhr.status);
      }
      console.log(mydata);
      baseurl = window.movies_image_url;
      console.log(baseurl);
      posterSizes = window.movies_posters_sizes;

      for (var i = 0; i<mydata.results.length; i++) {
          var movies_title = mydata.results[i].original_title;
          var movies_overview = mydata.results[i].overview;
          var movies_votes = mydata.results[i].vote_average;

          //document.getElementById("result").appendChild("result") = (mydata.results[i].original_title + "<br />");
          var posters = mydata.results[i].poster_path;

          var posters_Url = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + posters;
          console.log(posters_Url);
          var div = document.getElementById('movies-container');
          var imgDiv = document.createElement('div');
              imgDiv.className = "movie_poster";
          var img = document.createElement('img');
              img.setAttribute('src', posters_Url);
              imgDiv.appendChild(img);

          var node = document.createElement("div");
              node.className = "movie_desc ";
          var textnode = document.createTextNode(movies_title);
          var textOverview = document.createTextNode(movies_overview);
          var textVote = document.createTextNode(movies_votes);
          var textRatting = document.createTextNode('Ratings ');

          node.appendChild(document.createElement('h2'));
          node.appendChild(textnode);
          //headingforMovies.appendChild(textnode);
          node.appendChild(document.createElement('br'));
          node.appendChild(document.createElement('br'));
          node.appendChild(textRatting)
          node.appendChild(textVote);
          node.appendChild(document.createElement('br'));
          node.appendChild(document.createElement('br'));
          node.appendChild(textOverview);

          //console.log(mydata.results[i].original_title);


          document.getElementById("movies-container").appendChild(imgDiv);
          document.getElementById("movies-container").appendChild(node);


      }
      //document.getElementById("result").innerHTML = mydata;
  };
  xhr.send();
};

// Config function for Movie Poster API. 

// function baseUrl_Image() {

//   var xhr = new XMLHttpRequest();
//   var data = [];
//   // document.getElementById("result").innerHTML = 'BaseURL';
//   document.getElementById("movies-container").innerHTML = '';
//   xhr.open('GET', encodeURI('https://api.themoviedb.org/3/trending/movie/day?api_key=db2ade1028a9ab68c675e0e1637ba200'));
//   xhr.onload = function() {
//       if (xhr.status === 200) {
//           //alert('User\'s name is ' + xhr.responseText);
//           data.push(xhr.responseText);
//           var mydata = JSON.parse(data);
//       } else {
//           alert('Request failed.  Returned status of ' + xhr.status);
//       }

//       movies_image_url = mydata.images.base_url;
//       console.log(movies_image_url);
//       movies_posters_sizes = mydata.images.poster_sizes[2];
//       console.log(movies_posters_sizes);



//   };
//   xhr.send();
//   //return movies_image_url;
// };

/* <img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2"+currentUsers[i].poster_path+"'></img> */