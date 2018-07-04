

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
 
 
 
 
 
 
 
     // Steam api =========================================================================================================================
    function getSteamId(steamId) {
       // Fetch steam user ID number
       var queryURL = "https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=597FC535B0A81C139B5227A808EAA15B&vanityurl=" + steamId
       $.ajax({
          url: queryURL,
          method: "GET"
       }).then(function (data) {
        
          steamNumber = data.response.steamid;
        
          getSteamProfile(steamNumber);
          
       })
    }
    $("#steam-submit").on("click", function(){
       event.preventDefault();
       var steamId = $("#steam-input").val().trim();
       
      getSteamId(steamId);
    })
 
 
    // Fetch steam user profile page
 
    // nick's steam ID for testing purposes: 76561197972752173
 
    function getSteamProfile(number) {
       var queryURL = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=597FC535B0A81C139B5227A808EAA15B&steamids=" + number;
       $.ajax({
          url: queryURL,
          method: "GET"
       }).then(function (data) {


        var avatar = data.response.players[0].avatarmedium;
        var playerOnline;
        var image = $("<img src='" + avatar + "' />")
        var name = $("<h3>").text(data.response.players[0].personaname)
        var lastLogOff = data.response.players[0].lastlogoff;
        var newDate = $.parseJSON(lastLogOff);
        var formatDate = new Date(1000*newDate);
        var lastOnline = $("<p>").text("Last online: " + formatDate);
        // check if online 
        var online = data.response.players[0].personastate;
        if (online === 0){
          online = "no";
        } else if (online === 1){
          online = "yes";
        }
       playerOnline = $("<p>").text("online: " + online)
       
        $("#steam-div").append(image, name, playerOnline, lastOnline);
       })
    }


   
    // ==================================================================================================================================
 
    // xboxAPI key 40687e73c58e72dd8d225be86a8a11de96b04dda
 
   

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
 


