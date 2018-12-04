
  console.log('scripts loaded');

   var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        var player;
        var player2;
//Create all of the videos once the API is ready
//TAll of the players must be inside this function
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('grinch-vid', {
            height: '390',
            width: '640',
            videoId: 'kQb0DJZLhRM',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });

          player2 = new YT.Player('sia-vid', {
            height: '390',
            width: '640',
            videoId: 'qbjwT1uZrWA',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });

//Show the Grinch video and hide/stop the others
          $('#grinch').click(function(){
            $('#grinch-vid').show();
            $('#sia-vid').hide();
            player.playVideo();
            player2.stopVideo();
          });
//Show the Sia video and hide/stop the others
            $('#sia').click(function(){

              $('#sia-vid').show();
              player2.playVideo();
              player.stopVideo();
              $('#grinch-vid').hide();
            });
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          event.target.loadVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }
