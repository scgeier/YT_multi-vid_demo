
  console.log('scripts loaded');





   var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        var player2;
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

          $('#grinch').click(function(){
            $('#grinch-vid').show();
            $('#sia-vid').hide();
            player.playVideo();
            player2.stopVideo();
          });

            $('#sia').click(function(){
              //Change the chosenId to the Sia video
              $('#sia-vid').show();
              $('#grinch-vid').hide();
              player2.playVideo();
              player.stopVideo();

            });
        }



        function onPlayerReady(event) {
          event.target.loadVideo();
        }


        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }

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
