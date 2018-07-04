

$(document).ready(function() {

   // Initialize Firebase
   // var config = {
//     apiKey: "AIzaSyBCCCo7SJJGH4kO-BeDnXvTYULEhCUjdd0",
//     authDomain: "gamer-tagged.firebaseapp.com",
//     databaseURL: "https://gamer-tagged.firebaseio.com",
//     projectId: "gamer-tagged",
//     storageBucket: "",
//     messagingSenderId: "586030490192"
//   };
//   firebase.initializeApp(config);
 
 
 
 
 
 
 
   //  // Steam api =========================================================================================================================
   //  function getSteamId(steamId) {
   //     // Fetch steam user ID number
   //     var queryURL = "http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=597FC535B0A81C139B5227A808EAA15B&vanityurl=" + steamId
   //     $.ajax({
   //        url: queryURL,
   //        method: "GET"
   //     }).then(function (response) {
   //        steamNumber = response.steamid;
   //        getSteamProfile(steamNumber);
   //     })
   //  }
   //  $(document).on("click", "steam-id", function (event) {
   //     event.prevendDefault();
   //     var steamId = $("#steam-id-input").val().trim();
   //     addGames(steamId);
   //  })
 
 
   //  // Fetch steam user profile page
 
   //  // nick's steam ID for testing purposes: 76561197972752173
 
   //  function getSteamProfile(steamNumber) {
   //     var queryURL = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=597FC535B0A81C139B5227A808EAA15B&steamids=" + steamNumber;
   //     $.ajax({
   //        url: queryURL,
   //        method: "GET"
   //     }).then(function (response) {
 
   //     })
   //  }
    // ==================================================================================================================================
 
    // xboxAPI key 40687e73c58e72dd8d225be86a8a11de96b04dda
 
    // giantbomb API start =================================================================>>>

    var gameLibrary = [];
    var searchResults = [];
 
    function searchGame(game) {
      $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'https://www.giantbomb.com/api/search/?format=jsonp&api_key=47d89cf2776025d8ace3e66e641a4eb8bd066fc5&query=' + game
      }).done(function(data) {
       var results = data.results
       console.log(results)
      for(i=0; i<6; i++){
        var print = results[i].image.small_url;
        console.log(print)
        var image = $("<img src='" + print + "' />")
        console.log(image)
        
      $("#search-results").append(image)
      }
      
      }).fail(function() {
      alert("error");
      }).always(function() {
  
      });
      //  var queryURL = "https://www.giantbomb.com/api/search/?api_key=47d89cf2776025d8ace3e66e641a4eb8bd066fc5&format=jsonp&query=" + game
      //  $.ajax({
      //     url: queryURL,
      //     method: "GET",
      //     dataType: 'jsonp',
      //     crossDomain: true,
      //     jsonp: 'json_callback'
      //  }).then(function (response) {
      //     // console.log(response)
      //     // create a new list for the upcoming results
      //     // var newList = $("<ul>");
      //     // ("#search-results").append(newList);
      //     // clear searchResults array
      //     // searchResults = [""];
      //     //  cycle through results
      //     for (i = 0; i < response.length; i++) {
      //        var newButton = $("<button>add to library</button>");
      //        newButton.addClass("add-game");
      //        newButton.val([i]);
      //        var list = $("<li>");
      //        var gameName = $("<h1>").text(response.name);
      //        var gameImage = $("<img>").attr("src", response.thumb_url);
      //        var gameInfo = $("<p>").text(response.deck);
      //       console.log(gameName, gameImage, gameInfo);
      //        // push game title to search array
      //        searchResults.push(gameName); // this will only save the title. We could decide to save an image instead
 
      //        // prints game name, game image, game info, and an 'add to library' button to DIV
      //        $("#search-results").append(list, gameName, gameImage, gameInfo, newButton);
      //     }
 
      //  })
      }
       // game search input+++++++++++++++++++++++++++++++++++++++++
      
       $("#search-game").on("click", function() {
          event.preventDefault();
          var inputGame = $("#search-input").val().trim();
          console.log(inputGame)
        searchGame(inputGame)
       })
      
 
    // add game to library
    $(document).on("click", ".add-game", function () {
       event.preventDefault(); 
       var x = $(this).val(); //grabs value that will match location within array and assigns to a new variable
       var newGame = searchResults[x]; //grabs game title from searchResults array
       console.log(newGame);
       gameLibrary.push(newGame); //adds to libray variable
       
       $("#game-div").push()
       // store within firebase
       
    })

    // $.ajax({

    //   // The 'type' property sets the HTTP method.
    //   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
    //   type: 'GET',
    
    //   // The URL to make the request to.
    //   url: 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html',
    
    //   // The 'contentType' property sets the 'Content-Type' header.
    //   // The JQuery default for this property is
    //   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
    //   // a preflight. If you set this value to anything other than
    //   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
    //   // you will trigger a preflight request.
    //   contentType: 'text/plain',
    
    //   xhrFields: {
    //     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    //     // This can be used to set the 'withCredentials' property.
    //     // Set the value to 'true' if you'd like to pass cookies to the server.
    //     // If this is enabled, your server must respond with the header
    //     // 'Access-Control-Allow-Credentials: true'.
    //     withCredentials: false
    //   },
    
    //   headers: {
    //     // Set any custom headers here.
    //     // If you set any non-simple headers, your server must include these
    //     // headers in the 'Access-Control-Allow-Headers' response header.
    //   },
    
    //   success: function() {
    //     // Here's where you handle a successful response.
    //   },
    
    //   error: function() {
    //     // Here's where you handle an error response.
    //     // Note that if the error was due to a CORS issue,
    //     // this function will still fire, but there won't be any additional
    //     // information about the error.
    //   }
    // });
    
 

    // giantbomb API end <<<=================================================================
 
 
    // Profile creation start ============================================================>>>
 
    // object that will hold user profile locally
   //  var curUser = {
   //     name: "",
   //     avatar: "",
   //     steamName: "",
   //     psnName: "",
   //     xboxName: "",
   //     nintendoId: "",
   //     aboutMe: "",
   //     status: "",
   //     // will add more later
   //  }
 
   //  $(document).on("click", "#user-submit", function () {
   //     curUser.name = ("#name-input").val().trim();
   //     curUser.steamName = ("#steam-input").val().trim();
   //     curUser.psnName = ("#psn-input").val().trim();
   //     curUser.xboxName = ("#xbox-input").val().trim();
   //     curUser.nintendoId = ("#nintendo-input").val().trim();
   //     curUser.aboutMe = ("#about-input").val().trim();
 
   //     // print and format data to DIV containing user info on profile page
   //     // store data into firebase
   //  })
 
   //  $('.carousel.carousel-slider').carousel({
   //     fullWidth: true,
   //     indicators: true,
   //     next: 3
   //  });
 
   //  $('.sidenav').sidenav();
   //  $('.tabs').tabs({swipeable: true});
 
   //  setInterval(function () {
   //     $('.carousel').carousel('next');
   //  }, 5000);
 
 })
 
 // Profile creation end <<<=================================================================
 
 
 // firebase
 
    // firebase is blanked out for now until we work on it
 
 /*
 
 
    
 
    // Initialize Firebase
    var config = {
       apiKey: "AIzaSyBZvq3N02QOEG6fa-6qiDLwOHoSeIBza0Q",
       authDomain: "game-website-9813e.firebaseapp.com",
       databaseURL: "https://game-website-9813e.firebaseio.com",
       projectId: "game-website-9813e",
       storageBucket: "game-website-9813e.appspot.com",
       messagingSenderId: "70919236665"
    };
    firebase.initializeApp(config);
 
 
 
 */
 


