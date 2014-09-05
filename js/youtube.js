var onYouTubeIframeAPIReady;

$(function(){

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  onYouTubeIframeAPIReady = function () {
    player = new YT.Player('demo', {
      height: '1920',
      width: '1080',
      videoId: YOUTUBE_ID,
      playerVars: {
        enablejsapi: 1,
        origin: '*',
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        color: 'white'
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    var p = event.target;
    p.playVideo();
    setInterval(function(){
        var r = p.getDuration() - p.getCurrentTime();
        if(r < 0.1) $('#demo').hide();
        updateTime(r);
    },50);
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING)
      player.setPlaybackQuality(player.getAvailableQualityLevels()[0]);
    else if (event.data == YT.PlayerState.ENDED){
      $('#demo').hide();
      next(); 
    }
  }

});
